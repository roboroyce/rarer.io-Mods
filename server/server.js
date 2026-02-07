import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promises as fs } from "node:fs";
import { WebSocketServer } from "ws";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const port = Number.parseInt(process.env.PORT ?? "8080", 10);

const MessageKinds = {
  LoginRequest: 1,
  LoginResponse: 2,
  EnterRequest: 3,
  EnterResponse: 4,
  LeaveRequest: 5,
  LeaveResponse: 6,
  Input: 7,
  State: 8,
  RollRequest: 9,
  RollResponse: 10,
  RollKeep: 11,
  InventoryRequest: 12,
  InventoryResponse: 13,
  InventoryEquip: 14,
  InventoryDiscard: 15,
  UsernameRequest: 16,
  UsernameResponse: 17,
  Chat: 18,
  PlayerNames: 19,
  CraftingRequest: 20,
  CraftingResponse: 21,
  LobbyRequest: 22,
  LobbyResponse: 23,
  ShopRequest: 24,
  ShopResponse: 25,
  BuyRequest: 26,
  BuyResponse: 27,
  RestartIncoming: 28,
  RareAuraRevealed: 29,
  ServerBroadcast: 30,
  SetFields: 31
};

const LoginMethod = {
  NoAccount: 1,
  GuestAccount: 2,
  DiscordCode: 3
};

const AuraKinds = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 29
];

const RecipeKinds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const lobbyState = {
  lobbyId: 1,
  maxPlayers: 16
};

class PacketWriter {
  constructor(size = 4096) {
    this.buffer = new Uint8Array(size);
    this.view = new DataView(this.buffer.buffer);
    this.offset = 0;
  }

  ensure(size) {
    if (this.offset + size <= this.buffer.length) return;
    const next = new Uint8Array(Math.max(this.buffer.length * 2, this.offset + size));
    next.set(this.buffer);
    this.buffer = next;
    this.view = new DataView(next.buffer);
  }

  writeUint8(value) {
    this.ensure(1);
    this.view.setUint8(this.offset, value);
    this.offset += 1;
  }

  writeUint32(value) {
    this.ensure(4);
    this.view.setUint32(this.offset, value);
    this.offset += 4;
  }

  writeFloat32(value) {
    this.ensure(4);
    this.view.setFloat32(this.offset, value);
    this.offset += 4;
  }

  writeBool(value) {
    this.writeUint8(value ? 1 : 0);
  }

  writeString(value) {
    const encoded = new TextEncoder().encode(value);
    if (encoded.length > 255) {
      throw new Error("String too long for protocol");
    }
    this.writeUint8(encoded.length);
    this.ensure(encoded.length);
    this.buffer.set(encoded, this.offset);
    this.offset += encoded.length;
  }

  writeArray(values, writeItem) {
    if (values.length > 255) {
      throw new Error("Array too long for protocol");
    }
    this.writeUint8(values.length);
    for (const item of values) {
      writeItem(item);
    }
  }

  writeOptional(value, writeItem) {
    if (value === null || value === undefined) {
      this.writeBool(false);
      return;
    }
    this.writeBool(true);
    writeItem(value);
  }

  finish() {
    return this.buffer.subarray(0, this.offset);
  }
}

class PacketReader {
  constructor(buffer) {
    this.view = new DataView(buffer);
    this.offset = 0;
  }

  readUint8() {
    const value = this.view.getUint8(this.offset);
    this.offset += 1;
    return value;
  }

  readUint32() {
    const value = this.view.getUint32(this.offset);
    this.offset += 4;
    return value;
  }

  readFloat32() {
    const value = this.view.getFloat32(this.offset);
    this.offset += 4;
    return value;
  }

  readBool() {
    const value = this.readUint8();
    if (value !== 0 && value !== 1) {
      throw new Error("Expected boolean");
    }
    return value === 1;
  }

  readString() {
    const length = this.readUint8();
    const bytes = new Uint8Array(this.view.buffer, this.offset, length);
    this.offset += length;
    return new TextDecoder().decode(bytes);
  }

  readArray(readItem) {
    const length = this.readUint8();
    const values = [];
    for (let i = 0; i < length; i += 1) {
      values.push(readItem());
    }
    return values;
  }

  readOptional(readItem) {
    const hasValue = this.readBool();
    return hasValue ? readItem() : null;
  }
}

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".ico": "image/x-icon"
};

function resolveStaticPath(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const safePath = decoded === "/" ? "/index.html" : decoded;
  const resolved = path.normalize(path.join(repoRoot, safePath));
  if (!resolved.startsWith(repoRoot)) {
    return null;
  }
  return resolved;
}

const server = http.createServer(async (req, res) => {
  if (!req.url) {
    res.writeHead(400).end("Bad Request");
    return;
  }
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === "/ws") {
    res.writeHead(426).end("Upgrade Required");
    return;
  }
  const filePath = resolveStaticPath(url.pathname);
  if (!filePath) {
    res.writeHead(403).end("Forbidden");
    return;
  }
  try {
    const stat = await fs.stat(filePath);
    const toServe = stat.isDirectory()
      ? path.join(filePath, "index.html")
      : filePath;
    const content = await fs.readFile(toServe);
    const ext = path.extname(toServe).toLowerCase();
    res.writeHead(200, { "Content-Type": mimeTypes[ext] ?? "application/octet-stream" });
    res.end(content);
  } catch (error) {
    res.writeHead(404).end("Not Found");
  }
});

const wss = new WebSocketServer({ noServer: true });

server.on("upgrade", (req, socket, head) => {
  const url = new URL(req.url ?? "/", `http://${req.headers.host}`);
  if (url.pathname !== "/ws") {
    socket.destroy();
    return;
  }
  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit("connection", ws, req);
  });
});

const clients = new Map();
let nextPlayerId = 1;

function createAccountId() {
  return `acc_${Math.random().toString(36).slice(2, 10)}`;
}

function createPassword() {
  return `pw_${Math.random().toString(36).slice(2, 10)}`;
}

function sendPacket(ws, writer) {
  ws.send(writer.finish());
}

function sendLoginResponse(ws, { accountId, username, password, discordAvatarURL }) {
  const writer = new PacketWriter();
  writer.writeUint8(MessageKinds.LoginResponse);
  writer.writeString(accountId);
  writer.writeString(username);
  writer.writeString(password);
  writer.writeOptional(discordAvatarURL, (value) => writer.writeString(value));
  sendPacket(ws, writer);
}

function sendLobbyResponse(ws) {
  const writer = new PacketWriter();
  writer.writeUint8(MessageKinds.LobbyResponse);
  writer.writeArray(
    [
      {
        lobbyId: lobbyState.lobbyId,
        currentPlayers: clients.size,
        maxPlayers: lobbyState.maxPlayers
      }
    ],
    (lobby) => {
      writer.writeUint8(lobby.lobbyId);
      writer.writeUint8(lobby.currentPlayers);
      writer.writeUint8(lobby.maxPlayers);
    }
  );
  sendPacket(ws, writer);
}

function sendEnterResponse(ws, playerId) {
  const writer = new PacketWriter();
  writer.writeUint8(MessageKinds.EnterResponse);
  writer.writeUint8(playerId);
  sendPacket(ws, writer);
}

function sendLeaveResponse(ws) {
  const writer = new PacketWriter();
  writer.writeUint8(MessageKinds.LeaveResponse);
  sendPacket(ws, writer);
}

function sendPlayerNames() {
  const writer = new PacketWriter();
  writer.writeUint8(MessageKinds.PlayerNames);
  writer.writeArray(
    Array.from(clients.values(), (client) => ({
      id: client.playerId,
      username: client.username
    })),
    (player) => {
      writer.writeUint8(player.id);
      writer.writeString(player.username);
    }
  );
  for (const ws of clients.keys()) {
    sendPacket(ws, writer);
  }
}

function sendInventoryResponse(ws, inventory) {
  const writer = new PacketWriter();
  writer.writeUint8(MessageKinds.InventoryResponse);
  writer.writeArray(inventory.auras, (aura) => writer.writeUint8(aura));
  writer.writeOptional(inventory.equippedIndex, (value) => writer.writeUint8(value));
  writer.writeUint32(inventory.inventorySize);
  sendPacket(ws, writer);
}

function sendRollResponse(ws, rollResponse) {
  const writer = new PacketWriter();
  writer.writeUint8(MessageKinds.RollResponse);
  writer.writeUint8(rollResponse.recipeKind);
  writer.writeUint8(rollResponse.rolledAura);
  writer.writeOptional(rollResponse.replaceAura, (value) => writer.writeUint8(value));
  writer.writeUint32(rollResponse.rollMs);
  writer.writeUint8(rollResponse.luck);
  sendPacket(ws, writer);
}

function sendServerBroadcast(message) {
  const writer = new PacketWriter();
  writer.writeUint8(MessageKinds.ServerBroadcast);
  writer.writeString(message);
  for (const ws of clients.keys()) {
    sendPacket(ws, writer);
  }
}

function sendStateBroadcast() {
  const writer = new PacketWriter();
  writer.writeUint8(MessageKinds.State);
  writer.writeArray(
    Array.from(clients.values(), (client) => ({
      id: client.playerId,
      x: client.x,
      y: client.y,
      angle: client.angle,
      equippedAura: client.equippedAura,
      numRolls: client.numRolls,
      chatMessage: null
    })),
    (player) => {
      writer.writeUint8(player.id);
      writer.writeFloat32(player.x);
      writer.writeFloat32(player.y);
      writer.writeFloat32(player.angle);
      writer.writeOptional(player.equippedAura, (value) => writer.writeUint8(value));
      writer.writeUint32(player.numRolls);
      writer.writeOptional(player.chatMessage, (value) => writer.writeString(value));
    }
  );
  writer.writeOptional(null, () => {});
  for (const ws of clients.keys()) {
    sendPacket(ws, writer);
  }
}

function decodeRequest(buffer) {
  const reader = new PacketReader(buffer);
  const kind = reader.readUint8();
  switch (kind) {
    case MessageKinds.LoginRequest: {
      const method = reader.readUint8();
      if (method === LoginMethod.NoAccount) {
        return { kind, method };
      }
      if (method === LoginMethod.GuestAccount) {
        return {
          kind,
          method,
          accountId: reader.readString(),
          password: reader.readString()
        };
      }
      if (method === LoginMethod.DiscordCode) {
        return {
          kind,
          method,
          code: reader.readString(),
          accountId: reader.readString(),
          password: reader.readString()
        };
      }
      throw new Error("Unknown login method");
    }
    case MessageKinds.LobbyRequest:
      return { kind };
    case MessageKinds.EnterRequest:
      return { kind, lobbyId: reader.readUint8() };
    case MessageKinds.LeaveRequest:
      return { kind };
    case MessageKinds.Input:
      return {
        kind,
        angle: reader.readFloat32(),
        moveAngle: reader.readOptional(() => reader.readFloat32())
      };
    case MessageKinds.RollRequest:
      return { kind, recipeKind: reader.readUint8(), fast: reader.readBool() };
    case MessageKinds.InventoryRequest:
      return { kind };
    case MessageKinds.Chat:
      return { kind, message: reader.readString() };
    default:
      return { kind };
  }
}

function validateRequest(request) {
  switch (request.kind) {
    case MessageKinds.LoginRequest:
      return true;
    case MessageKinds.LobbyRequest:
      return true;
    case MessageKinds.EnterRequest:
      return request.lobbyId === lobbyState.lobbyId;
    case MessageKinds.RollRequest:
      return RecipeKinds.includes(request.recipeKind);
    case MessageKinds.Chat:
      return typeof request.message === "string";
    default:
      return true;
  }
}

wss.on("connection", (ws) => {
  ws.binaryType = "arraybuffer";
  const client = {
    ws,
    playerId: null,
    accountId: null,
    username: "Guest",
    password: null,
    x: 0,
    y: 0,
    angle: 0,
    equippedAura: AuraKinds[0],
    numRolls: 0
  };
  clients.set(ws, client);

  ws.on("message", (data) => {
    if (!(data instanceof ArrayBuffer)) return;
    let request;
    try {
      request = decodeRequest(data);
    } catch (error) {
      ws.close();
      return;
    }
    if (!validateRequest(request)) {
      ws.close();
      return;
    }
    switch (request.kind) {
      case MessageKinds.LoginRequest: {
        if (request.method === LoginMethod.NoAccount) {
          client.accountId = createAccountId();
          client.password = createPassword();
          client.username = "Guest";
        } else {
          client.accountId = request.accountId;
          client.password = request.password;
          client.username = "Guest";
        }
        sendLoginResponse(ws, {
          accountId: client.accountId,
          username: client.username,
          password: client.password,
          discordAvatarURL: null
        });
        break;
      }
      case MessageKinds.LobbyRequest:
        sendLobbyResponse(ws);
        break;
      case MessageKinds.EnterRequest: {
        if (client.playerId === null) {
          client.playerId = nextPlayerId;
          nextPlayerId = nextPlayerId >= 250 ? 1 : nextPlayerId + 1;
        }
        sendEnterResponse(ws, client.playerId);
        sendPlayerNames();
        break;
      }
      case MessageKinds.LeaveRequest:
        sendLeaveResponse(ws);
        break;
      case MessageKinds.Input:
        if (typeof request.angle === "number") {
          client.angle = request.angle;
        }
        break;
      case MessageKinds.InventoryRequest:
        sendInventoryResponse(ws, {
          auras: [AuraKinds[0], AuraKinds[1], AuraKinds[2]],
          equippedIndex: 0,
          inventorySize: 30
        });
        break;
      case MessageKinds.RollRequest: {
        client.numRolls += 1;
        const rolledAura = AuraKinds[Math.floor(Math.random() * AuraKinds.length)];
        sendRollResponse(ws, {
          recipeKind: request.recipeKind,
          rolledAura,
          replaceAura: null,
          rollMs: 800,
          luck: 0
        });
        break;
      }
      case MessageKinds.Chat:
        sendServerBroadcast(`${client.username}: ${request.message}`);
        break;
      default:
        break;
    }
  });

  ws.on("close", () => {
    clients.delete(ws);
    sendPlayerNames();
  });
});

setInterval(() => {
  if (clients.size === 0) return;
  sendStateBroadcast();
}, 200);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${port}`);
});
