var xo = Object.defineProperty;
var So = (e, t, o) =>
  t in e
    ? xo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (e[t] = o);
var R = (e, t, o) => So(e, typeof t != "symbol" ? t + "" : t, o);

// Module preloading (unchanged)
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const c of a.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = o(i);
    fetch(i.href, a);
  }
})();

// CSS Classes
const r = {
  button: "button",
  buttonGreen: "button-green",
  buttonRed: "button-red",
  buttonDiscord: "button-discord",
  buttonGray: "button-gray",
  buttonDisabled: "button-disabled",
  buttonClose: "button-close",
  tooltip: "tooltip",
  centerRight: "center-right",
  bottomLeft: "bottom-left",
  bottomCenter: "bottom-center",
  bottomRight: "bottom-right",
  tooltipContainer: "tooltip-container",
  modal: "modal",
  modalShow: "modal-show",
  modalActions: "modal-actions",
  modalHeader: "modal-header",
  modalFooter: "modal-footer",
  auraBox: "aura-box",
  selected: "selected"
};

const Go = { canvas: "canvas" };
const Te = {
  menu: "menu",
  mainSection: "main-section",
  mainTitle: "main-title",
  topLeftSection: "top-left-section",
  topRightSection: "top-right-section",
  lobbySelector: "lobby-selector"
};

// Constants
const minX = 32, minY = 32, maxX = 1968, maxY = 1968;
const hn = 2000, Vo = 32, yn = 64, Jo = 120, Zo = 30, Qo = 20;

// Aura Types and Weights
const n = {
  Common: 1, Uncommon: 2, Rare: 3, Epic: 4, Spark: 5, Ripple: 6, Stellar: 7, Enraged: 8,
  Confetti: 9, Firefly: 10, Toxic: 11, Ignited: 12, Starfish: 13, Chromatic: 14, Vortex: 15,
  Lotus: 16, Angelic: 17, Starboard: 18, Inferno: 19, Kaleidoscope: 20, Astral: 21, Demonic: 22,
  Miasma: 23, Tempest: 24, Commmon: 29
};

const Bt = {
  [n.Common]: "Common", [n.Uncommon]: "Uncommon", [n.Rare]: "Rare", [n.Epic]: "Epic",
  [n.Spark]: "Spark", [n.Ripple]: "Ripple", [n.Stellar]: "Stellar", [n.Enraged]: "Enraged",
  [n.Confetti]: "Confetti", [n.Firefly]: "Firefly", [n.Toxic]: "Toxic", [n.Ignited]: "Ignited",
  [n.Starfish]: "Starfish", [n.Chromatic]: "Chromatic", [n.Vortex]: "Vortex", [n.Lotus]: "Lotus",
  [n.Angelic]: "Angelic", [n.Starboard]: "Starboard", [n.Inferno]: "Inferno",
  [n.Kaleidoscope]: "Kaleidoscope", [n.Astral]: "Astral", [n.Demonic]: "Demonic",
  [n.Miasma]: "Miasma", [n.Tempest]: "Tempest", [n.Commmon]: "Commmon"
};

const Bn = {
  [n.Common]: 2, [n.Uncommon]: 4, [n.Rare]: 10, [n.Epic]: 20, [n.Spark]: 25, [n.Ripple]: 33,
  [n.Stellar]: 50, [n.Enraged]: 200, [n.Confetti]: 400, [n.Firefly]: 1000, [n.Toxic]: 2000,
  [n.Ignited]: 2500, [n.Starfish]: 3333, [n.Chromatic]: 5000, [n.Vortex]: 20000, [n.Lotus]: 40000,
  [n.Angelic]: 100000, [n.Starboard]: 200000, [n.Inferno]: 250000, [n.Kaleidoscope]: 333333,
  [n.Astral]: 500000, [n.Demonic]: 2000000, [n.Miasma]: 4000000, [n.Tempest]: 10000000,
  [n.Commmon]: 100000000
};

// Recipe Definitions
const b = {
  NoRecipe: 1, FourLeafClover: 2, PlayWithFire: 3, RisingTide: 4, StarlitNight: 5,
  LightVsDark: 6, PartyOn: 7, MegaI: 8, UpgradeA: 9, UpgradeB: 10, UpgradeC: 11, UpgradeD: 12
};

const qt = {
  [b.NoRecipe]: {
    name: "No Recipe",
    description: "Just a default roll",
    requiredAuras: [],
    weights: [
      [n.Common, 50000014], [n.Uncommon, 25e6], [n.Rare, 1e7], [n.Epic, 5e6],
      [n.Spark, 4e6], [n.Ripple, 3e6], [n.Stellar, 2e6], [n.Enraged, 5e5],
      [n.Confetti, 25e4], [n.Firefly, 1e5], [n.Toxic, 5e4], [n.Ignited, 4e4],
      [n.Starfish, 3e4], [n.Chromatic, 2e4], [n.Vortex, 5e3], [n.Lotus, 2500],
      [n.Angelic, 1e3], [n.Starboard, 500], [n.Inferno, 400], [n.Kaleidoscope, 300],
      [n.Astral, 200], [n.Demonic, 50], [n.Miasma, 25], [n.Tempest, 10], [n.Commmon, 1]
    ]
  },
  [b.FourLeafClover]: {
    name: "4 Leaf Clover",
    description: "4x luck for all auras",
    requiredAuras: [[n.Common, 1], [n.Uncommon, 1], [n.Rare, 1], [n.Epic, 1]],
    weights: [
      [n.Rare, 40000056], [n.Epic, 2e7], [n.Spark, 16e6], [n.Ripple, 12e6],
      [n.Stellar, 8e6], [n.Enraged, 2e6], [n.Confetti, 1e6], [n.Firefly, 4e5],
      [n.Toxic, 2e5], [n.Ignited, 16e4], [n.Starfish, 12e4], [n.Chromatic, 8e4],
      [n.Vortex, 2e4], [n.Lotus, 1e4], [n.Angelic, 4e3], [n.Starboard, 2e3],
      [n.Inferno, 1600], [n.Kaleidoscope, 1200], [n.Astral, 800], [n.Demonic, 200],
      [n.Miasma, 100], [n.Tempest, 40], [n.Commmon, 4]
    ]
  },
  [b.PlayWithFire]: {
    name: "Play With Fire",
    description: "150x luck for fire auras",
    requiredAuras: [[n.Spark, 4]],
    weights: [[n.Common, 3394e4], [n.Spark, 6e7], [n.Ignited, 6e6], [n.Inferno, 6e4]]
  },
  [b.RisingTide]: {
    name: "Rising Tide",
    description: "200x luck for water auras",
    requiredAuras: [[n.Ripple, 4]],
    weights: [[n.Common, 339e5], [n.Ripple, 6e7], [n.Starfish, 6e6], [n.Starboard, 1e5]]
  },
  [b.StarlitNight]: {
    name: "Starlit Night",
    description: "250x luck for light auras",
    requiredAuras: [[n.Stellar, 4]],
    weights: [[n.Common, 3495e4], [n.Stellar, 4e7], [n.Firefly, 25e6], [n.Astral, 5e4]]
  },
  [b.LightVsDark]: {
    name: "Light vs. Dark",
    description: "100x luck for winged auras",
    requiredAuras: [[n.Enraged, 3]],
    weights: [[n.Common, 49895e3], [n.Enraged, 5e7], [n.Angelic, 1e5], [n.Demonic, 5e3]]
  },
  [b.PartyOn]: {
    name: "Party On!",
    description: "100x luck for all auras",
    requiredAuras: [[n.Confetti, 2]],
    weights: [
      [n.Enraged, 50001400], [n.Confetti, 25e6], [n.Firefly, 1e7], [n.Toxic, 5e6],
      [n.Ignited, 4e6], [n.Starfish, 3e6], [n.Chromatic, 2e6], [n.Vortex, 5e5],
      [n.Lotus, 25e4], [n.Angelic, 1e5], [n.Starboard, 5e4], [n.Inferno, 4e4],
      [n.Kaleidoscope, 3e4], [n.Astral, 2e4], [n.Demonic, 5e3], [n.Miasma, 2500],
      [n.Tempest, 1e3], [n.Commmon, 100]
    ]
  },
  [b.MegaI]: {
    name: "Mega Roll I",
    description: "10,000x luck for all auras",
    requiredAuras: [[n.Chromatic, 10]],
    weights: [
      [n.Vortex, 5014e4], [n.Lotus, 25e6], [n.Angelic, 1e7], [n.Starboard, 5e6],
      [n.Inferno, 4e6], [n.Kaleidoscope, 3e6], [n.Astral, 2e6], [n.Demonic, 5e5],
      [n.Miasma, 25e4], [n.Tempest, 1e5], [n.Commmon, 1e4]
    ]
  },
  [b.UpgradeA]: {
    name: "Firefly Upgrade",
    description: "50% of upgrading to Toxic",
    requiredAuras: [[n.Firefly, 1]],
    weights: [[n.Common, 5e7], [n.Toxic, 5e7]]
  },
  [b.UpgradeB]: {
    name: "Toxic Upgrade",
    description: "50% of upgrading to Ignited",
    requiredAuras: [[n.Toxic, 1]],
    weights: [[n.Common, 5e7], [n.Ignited, 5e7]]
  },
  [b.UpgradeC]: {
    name: "Ignited Upgrade",
    description: "50% of upgrading to Starfish",
    requiredAuras: [[n.Ignited, 1]],
    weights: [[n.Common, 5e7], [n.Starfish, 5e7]]
  },
  [b.UpgradeD]: {
    name: "Starfish Upgrade",
    description: "50% of upgrading to Chromatic",
    requiredAuras: [[n.Starfish, 1]],
    weights: [[n.Common, 5e7], [n.Chromatic, 5e7]]
  }
};

// Map Setup
const mapContainerClass = "map-container";
const mapClass = "map";
const mapContainer = document.createElement("div");
mapContainer.className = mapContainerClass;
mapContainer.style.display = "none";
const map = document.createElement("div");
map.className = mapClass;
mapContainer.appendChild(map);
document.body.appendChild(mapContainer);

// Map Styles
const mapStyle = document.createElement("style");
mapStyle.textContent = `
  .${mapContainerClass} {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: auto;
  }
  .${mapClass} {
    width: 100%;
    height: 100%;
    background-color: rgba(44, 62, 80, 0.9);
    border: 2px solid #ecf0f1;
    position: relative;
    overflow: hidden;
  }
  .player-dot {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
  }
  .player-label {
    position: absolute;
    color: white;
    font-size: 12px;
    transform: translate(-50%, -100%);
    white-space: nowrap;
  }
  .${r.button} {
    padding: 10px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    color: white;
  }
  .${r.buttonGreen} { background-color: #28a745; }
  .${r.buttonRed} { background-color: #dc3545; }
  .${r.buttonDiscord} { background-color: #7289da; }
  .${r.buttonGray} { background-color: #6c757d; }
  .${r.buttonDisabled} { background-color: #6c757d; cursor: not-allowed; }
  .${r.buttonClose} { background-color: #343a40; }
  .${r.tooltipContainer} { position: relative; display: inline-block; }
  .${r.tooltip} {
    visibility: hidden;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
  }
  .${r.centerRight} { top: 50%; right: 100%; transform: translateY(-50%); }
  .${r.bottomLeft} { bottom: 100%; left: 0; }
  .${r.bottomCenter} { bottom: 100%; left: 50%; transform: translateX(-50%); }
  .${r.bottomRight} { bottom: 100%; right: 0; }
  .${r.tooltipContainer}:hover .${r.tooltip} { visibility: visible; }
  .${r.modal} {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #2c3e50;
    padding: 20px;
    border-radius: 10px;
    z-index: 1001;
    color: white;
  }
  .${r.modalShow} { display: block; }
  .${r.modalActions} { display: flex; justify-content: space-between; }
  .${r.modalHeader} { font-size: 24px; margin-bottom: 10px; }
  .${r.modalFooter} { margin-top: 10px; }
  .${r.auraBox} { display: inline-block; margin: 5px; padding: 10px; background-color: #444; }
  .${r.selected} { border: 2px solid #fff; }
`;
document.head.appendChild(mapStyle);

// Canvas Setup
const fe = document.createElement("canvas");
fe.className = Go.canvas;
const d = fe.getContext("2d");

// Toggle Map
function toggleMap() {
  const chatInput = document.querySelector('.chat-input');
  if (chatInput && document.activeElement === chatInput) return;
  const chatWindow = document.querySelector('.chat-window');
  const isChatOpen = chatWindow && window.getComputedStyle(chatWindow).display !== 'none';
  const startScreen = document.querySelector('.start-screen');
  const isStartScreen = startScreen && window.getComputedStyle(startScreen).display !== 'none';
  if (isChatOpen || isStartScreen) return;
  mapContainer.style.display = mapContainer.style.display === "none" ? "block" : "none";
  if (mapContainer.style.display === "block" && typeof window.updateMapFromGameState === 'function') {
    window.updateMapFromGameState();
  }
}
window.toggleMap = toggleMap;

// Update Map
function updateMap(gameState) {
  if (!gameState) {
    console.error("Game state is not provided");
    return;
  }
  map.innerHTML = '';
  const players = gameState.players || [];
  const currentDrop = gameState.currentDrop;
  if (players.length === 0 && !currentDrop) {
    const noPlayersText = document.createElement('div');
    noPlayersText.textContent = 'No players or drops found';
    noPlayersText.style.color = 'white';
    noPlayersText.style.position = 'absolute';
    noPlayersText.style.top = '50%';
    noPlayersText.style.left = '50%';
    noPlayersText.style.transform = 'translate(-50%, -50%)';
    map.appendChild(noPlayersText);
    return;
  }
  const mapWidth = map.clientWidth;
  const mapHeight = map.clientHeight;
  function scaleX(worldX) {
    return ((worldX - minX) / (maxX - minX)) * mapWidth;
  }
  function scaleY(worldY) {
    return ((worldY - minY) / (maxY - minY)) * mapHeight;
  }
  players.forEach((player, index) => {
    const playerX = scaleX(player.x);
    const playerY = scaleY(player.y);
    const dot = document.createElement('div');
    dot.className = 'player-dot';
    dot.style.left = `${playerX}px`;
    dot.style.top = `${playerY}px`;
    const label = document.createElement('div');
    label.className = 'player-label';
    label.textContent = window.Et ? window.Et(player.id) : `Player ${index + 1}`;
    label.style.left = `${playerX}px`;
    label.style.top = `${playerY - 10}px`;
    map.appendChild(dot);
    map.appendChild(label);
  });
  if (currentDrop) {
    const dropX = scaleX(currentDrop.x);
    const dropY = scaleY(currentDrop.y);
    const dropDot = document.createElement('div');
    dropDot.className = 'drop-dot';
    dropDot.style.left = `${dropX}px`;
    dropDot.style.top = `${dropY}px`;
    dropDot.style.width = '15px';
    dropDot.style.height = '15px';
    dropDot.style.borderRadius = '50%';
    dropDot.style.backgroundColor = 'gold';
    dropDot.style.position = 'absolute';
    dropDot.style.transform = 'translate(-50%, -50%)';
    const dropLabel = document.createElement('div');
    dropLabel.className = 'drop-label';
    dropLabel.textContent = 'Rare Drop';
    dropLabel.style.color = 'gold';
    dropLabel.style.position = 'absolute';
    dropLabel.style.left = `${dropX}px`;
    dropLabel.style.top = `${dropY - 20}px`;
    dropLabel.style.transform = 'translate(-50%, -100%)';
    dropLabel.style.whiteSpace = 'nowrap';
    map.appendChild(dropDot);
    map.appendChild(dropLabel);
  }
}
document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'm') toggleMap();
});
window.updateMapFromGameState = function() {
  if (typeof window.de !== 'undefined' && window.de) updateMap(window.de);
};
function startMapUpdates() {
  setInterval(() => {
    if (mapContainer.style.display !== "none" && window.de && window.de.players && window.de.players.length > 0) {
      updateMap(window.de);
    }
  }, 100);
}
startMapUpdates();

// Packet Types
const l = {
  LoginRequest: 1, LoginResponse: 2, EnterRequest: 3, EnterResponse: 4,
  LeaveRequest: 5, LeaveResponse: 6, Input: 7, State: 8, RollRequest: 9,
  RollResponse: 10, RollKeep: 11, InventoryRequest: 12, InventoryResponse: 13,
  InventoryEquip: 14, InventoryDiscard: 15, UsernameRequest: 16, UsernameResponse: 17,
  Chat: 18, PlayerNames: 19, CraftingRequest: 20, CraftingResponse: 21,
  LobbyRequest: 22, LobbyResponse: 23, ShopRequest: 24, ShopResponse: 25,
  BuyRequest: 26, BuyResponse: 27, RestartIncoming: 28, RareAuraRevealed: 29,
  ServerBroadcast: 30, SetFields: 31
};
const me = { NoAccount: 1, GuestAccount: 2, DiscordCode: 3 };
const I = { InventorySlot: 1, FastRoll: 2, AutoRoll: 3, LuckBoost: 4 };

// Packet Encoding
const Mn = new Uint8Array(4096), Ut = new DataView(Mn.buffer);
let oe = 0;
const ss = new TextEncoder();
function as(e) {
  oe = 0;
  W(e.kind);
  switch (e.kind) {
    case l.LoginRequest:
      W(e.method);
      if (e.method !== me.NoAccount) {
        if (e.method === me.GuestAccount) {
          J(e.accountId); J(e.password);
        } else if (e.method === me.DiscordCode) {
          J(e.code); J(e.accountId); J(e.password);
        }
      }
      break;
    case l.EnterRequest: W(e.lobbyId); break;
    case l.Input: vn(e.angle); it(e.moveAngle, vn); break;
    case l.RollRequest: W(e.recipeKind); ct(e.fast); break;
    case l.RollKeep: ct(e.isKeeping); break;
    case l.InventoryEquip: Ct(e.index); break;
    case l.InventoryDiscard: Ct(e.index); break;
    case l.UsernameRequest: J(e.username); break;
    case l.Chat: J(e.message); break;
    case l.BuyRequest: W(e.item); break;
    case l.SetFields:
      it(e.money, Ct); it(e.auras, (t) => Dn(t, W)); it(e.discordId, J); break;
  }
  return Mn.subarray(0, oe);
}
function W(e) { Ut.setUint8(oe, e); oe += 1; }
function Ct(e) { Ut.setUint32(oe, e); oe += 4; }
function vn(e) { Ut.setFloat32(oe, e); oe += 4; }
function ct(e) { W(e ? 1 : 0); }
function Dn(e, t) { W(e.length); for (let o = 0; o < e.length; o++) t(e[o]); }
function it(e, t) { e === null ? ct(false) : (ct(true), t(e)); }

// Packet Decoding
function rs(buffer) {
  const reader = new PacketReader(buffer);
  const kind = reader.readUint8();
  switch (kind) {
    case l.LoginResponse:
      return {
        kind, accountId: reader.readString(), username: reader.readString(),
        password: reader.readString(), discordAvatarURL: reader.readOptional(() => reader.readString())
      };
    case l.EnterResponse: return { kind, playerId: reader.readUint8() };
    case l.LeaveResponse: return { kind };
    case l.State:
      return {
        kind,
        players: reader.readArray(() => ({
          id: reader.readUint8(), x: reader.readFloat32(), y: reader.readFloat32(),
          angle: reader.readFloat32(), equippedAura: reader.readOptional(() => reader.readUint8()),
          numRolls: reader.readUint32(), chatMessage: reader.readOptional(() => reader.readString())
        })),
        currentDrop: reader.readOptional(() => ({ x: reader.readFloat32(), y: reader.readFloat32() }))
      };
    case l.PlayerNames:
      return { kind, names: reader.readArray(() => ({ id: reader.readUint8(), username: reader.readString() })) };
    case l.RollResponse:
      return {
        kind, recipeKind: reader.readUint8(), rolledAura: reader.readUint8(),
        replaceAura: reader.readOptional(() => reader.readUint8()), rollMs: reader.readUint32(),
        luck: reader.readUint8()
      };
    case l.InventoryResponse:
      return {
        kind, auras: reader.readArray(() => reader.readUint8()),
        equippedIndex: reader.readOptional(() => reader.readUint8()), inventorySize: reader.readUint32()
      };
    case l.ShopResponse:
      return {
        kind, money: reader.readUint32(),
        prices: reader.readArray(() => ({ item: reader.readUint8(), price: reader.readOptional(() => reader.readUint32()) }))
      };
    case l.BuyResponse: return { kind, item: reader.readUint8() };
    case l.UsernameResponse: return { kind, error: reader.readOptional(() => reader.readString()) };
    case l.CraftingResponse: return { kind, inventory: reader.readArray(() => reader.readUint8()) };
    case l.LobbyResponse:
      return {
        kind, lobbies: reader.readArray(() => ({
          lobbyId: reader.readUint8(), currentPlayers: reader.readUint8(), maxPlayers: reader.readUint8()
        }))
      };
    case l.RestartIncoming: return { kind };
    case l.ServerBroadcast: return { kind, message: reader.readString() };
    default: console.warn("Unknown packet kind:", kind); return null;
  }
}
class PacketReader {
  constructor(buffer) {
    this.view = new DataView(buffer);
    this.offset = 0;
  }
  readUint8() { const v = this.view.getUint8(this.offset); this.offset += 1; return v; }
  readUint32() { const v = this.view.getUint32(this.offset); this.offset += 4; return v; }
  readFloat32() { const v = this.view.getFloat32(this.offset); this.offset += 4; return v; }
  readBoolean() { return this.readUint8() === 1; }
  readString() {
    const len = this.readUint8();
    const bytes = new Uint8Array(this.view.buffer, this.view.byteOffset + this.offset, len);
    this.offset += len;
    return new TextDecoder().decode(bytes);
  }
  readOptional(readFunc) { return this.readBoolean() ? readFunc() : null; }
  readArray(readFunc) {
    const len = this.readUint8();
    const arr = [];
    for (let i = 0; i < len; i++) arr.push(readFunc());
    return arr;
  }
}

// Aura Colors
const auraColors = {
  [n.Common]: "#ffffff", [n.Uncommon]: "#00ff00", [n.Rare]: "#0000ff", [n.Epic]: "#800080",
  [n.Spark]: "#ffa500", [n.Ripple]: "#00b7eb", [n.Stellar]: "#ffff00", [n.Enraged]: "#ff0000",
  [n.Confetti]: "#ff69b4", [n.Firefly]: "#ffd700", [n.Toxic]: "#f4ff3f", [n.Ignited]: "#ff4500",
  [n.Starfish]: "#00ced1", [n.Chromatic]: "#9400d3", [n.Vortex]: "#4b0082", [n.Lotus]: "#ff6347",
  [n.Angelic]: "#f0e68c", [n.Starboard]: "#4682b4", [n.Inferno]: "#222224", [n.Kaleidoscope]: "#9932cc",
  [n.Astral]: "#4823c8", [n.Demonic]: "#551111", [n.Miasma]: "#222224", [n.Tempest]: "#23316e",
  [n.Commmon]: "#ffffff"
};

// Aura Drawing (Placeholder)
function Da(aura) {
  const canvas = document.createElement("canvas");
  canvas.width = 200;
  canvas.height = 100;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = auraColors[aura] || "#ffffff";
  ctx.fillRect(0, 0, 200, 100);
  ctx.fillStyle = "#ffffff";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.fillText(Bt[aura] || "Unknown", 100, 50);
  return canvas;
}

// Game Loop and Rendering (simplified, no particle effects)
let G = null, K = false, te = null;
const ho = new Map();
function Et(e) { return ho.get(e) ?? "???"; }
const P = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
const le = { copy(t) { Object.assign(this, t); } };
const h = Math.PI, B = 2 * h;
function Ci() {
  d.resetTransform();
  d.fillStyle = "#000000";
  d.fillRect(0, 0, fe.width, fe.height);
  if (!K || !G || !window.de) return;
  const e = performance.now();
  d.setTransform(P.a, P.b, P.c, P.d, P.e, P.f);
  for (const a of window.de.players) {
    le.copy(P);
    let { x: c, y: p } = a;
    le.translate(c, p);
    le.rotate(a.angle);
    d.setTransform(le);
    d.fillStyle = auraColors[a.equippedAura] || "#f7c574";
    d.beginPath();
    d.arc(0, 0, Vo, 0, B);
    d.fill();
    d.strokeStyle = "#000000";
    d.lineWidth = 3;
    d.stroke();
    le.copy(P);
    le.translate(c, p);
    d.setTransform(le);
    const name = Et(a.id);
    d.font = "bold 20px Arial";
    d.textAlign = "center";
    d.strokeStyle = "black";
    d.lineWidth = 4;
    d.strokeText(name, 0, 65);
    d.fillStyle = "white";
    d.fillText(name, 0, 65);
    if (a.equippedAura !== null) {
      d.fillStyle = auraColors[a.equippedAura] || "#ffffff";
      d.fillRect(-100, -135, 200, 100);
      d.fillStyle = "#ffffff";
      d.fillText(Bt[a.equippedAura] || "Unknown", 0, -85);
    }
  }
}
function vo() { Ci(); window.requestAnimationFrame(vo); }
window.requestAnimationFrame(vo);

// UI Setup
const go = { hud: "hud", restartIncomingText: "restart-incoming-text" };
const Bi = { leftButtons: "left-buttons" };
const st = document.createElement("div");
st.className = Bi.leftButtons;
const buttons = [
  { text: "Inventory", color: "#007bff", action: Vs },
  { text: "Crafting", color: "#28a745", action: () => f({ kind: l.CraftingRequest }) },
  { text: "Shop", color: "#ffc107", action: () => f({ kind: l.ShopRequest }) }
];
buttons.forEach(b => {
  const btn = X({ parentDiv: st, tooltipText: b.text, position: "centerRight", kind: "text", textContent: b.text, bgColor: b.color });
  btn.addEventListener("click", b.action);
});
const F = document.createElement("div");
F.className = go.hud;
F.style.display = "none";
const Ve = document.createElement("div");
Ve.className = go.restartIncomingText;
Ve.style.display = "none";
F.appendChild(st);
F.appendChild(Ve);
const j = document.createElement("div");
j.className = Te.menu;
const xe = document.createElement("div");
xe.className = Te.mainSection;
const Rt = document.createElement("div");
Rt.className = Te.topLeftSection;
const He = document.createElement("div");
He.className = Te.topRightSection;
const Fi = X({ parentDiv: Rt, tooltipText: "Changelog", position: "bottomLeft", kind: "text", textContent: "Changelog", bgColor: "#6c757d" });
const qi = X({ parentDiv: Rt, tooltipText: "Discord", position: "bottomCenter", kind: "text", textContent: "Discord", bgColor: "#7289da" });
Fi.addEventListener("click", () => window.open("/changelog.txt", "_blank"));
qi.addEventListener("click", () => window.open("https://discord.gg/at26WZ4RDC", "_blank"));
const Ee = document.createElement("select");
Ee.className = Te.lobbySelector;
j.append(Rt, He, xe);
document.body.append(fe, F, j);

// WebSocket Setup
function yo() {
  It("loading");
  te = new WebSocket("ws://localhost:8080");
  te.binaryType = "arraybuffer";
  const t = new URLSearchParams(window.location.search).get("code");
  if (t !== null) window.history.replaceState({}, "", window.location.pathname);
  te.addEventListener("open", () => {
    f({ kind: l.LobbyRequest });
    const o = localStorage.getItem("accountId"), s = localStorage.getItem("password");
    f(o === null || s === null ? { kind: l.LoginRequest, method: me.NoAccount } :
      t !== null ? { kind: l.LoginRequest, method: me.DiscordCode, code: t, accountId: o, password: s } :
      { kind: l.LoginRequest, method: me.GuestAccount, accountId: o, password: s });
  });
  te.addEventListener("close", () => {
    K && Ot();
    It("disconnected");
    _t(() => { F.style.display = "none"; j.style.display = ""; K = false; });
  });
  te.addEventListener("message", (o) => {
    if (!(o.data instanceof ArrayBuffer)) return;
    const s = rs(o.data);
    switch (s.kind) {
      case l.LoginResponse: Ui(s); It("loaded"); break;
      case l.EnterResponse: G = s.playerId; Et(G).startsWith("Guest") || $s(); break;
      case l.LeaveResponse: f({ kind: l.LobbyRequest }); _t(() => { F.style.display = "none"; j.style.display = ""; K = false; }); break;
      case l.State: window.de = s; K || _t(() => { j.style.display = "none"; F.style.display = ""; K = true; }); break;
      case l.PlayerNames: for (let { id, username } of s.names) { if (username === "Guest") username += id; ho.set(id, username); } break;
      case l.RollResponse: _a(s); break;
      case l.InventoryResponse: Js(s); break;
      case l.ShopResponse: ya(s); break;
      case l.BuyResponse: ba(s); break;
      case l.UsernameResponse: Ma(s); break;
      case l.CraftingResponse: Ra(s); break;
      case l.LobbyResponse: Pi(s); break;
      case l.RestartIncoming: $i(); break;
      case l.ServerBroadcast: Ps(s); break;
    }
  });
}
function f(e) { te && te.readyState === WebSocket.OPEN && te.send(as(e)); }
function X(e) {
  const t = document.createElement("div");
  t.className = r.tooltipContainer;
  const o = document.createElement("button");
  o.className = r.button;
  o.style.backgroundColor = e.bgColor || "#007bff";
  o.textContent = e.textContent;
  const s = document.createElement("div");
  s.textContent = e.tooltipText;
  s.classList.add(r.tooltip, r[e.position]);
  t.append(o, s);
  e.parentDiv.append(t);
  return o;
}
function Pi(e) {
  Ee.replaceChildren();
  for (const t of e.lobbies) {
    const o = document.createElement("option");
    o.value = "" + t.lobbyId;
    o.textContent = `Lobby${t.lobbyId} (${t.currentPlayers}/${t.maxPlayers})`;
    Ee.appendChild(o);
  }
}
function Ui(e) {
  He.replaceChildren();
  if (e.discordAvatarURL === null) {
    const t = X({ parentDiv: He, tooltipText: "Sign in with Discord", position: "bottomRight", kind: "text", textContent: "Sign in with Discord", bgColor: "#7289da" });
    t.classList.add(r.buttonDiscord);
    t.addEventListener("click", () => window.open("https://discord.com/oauth2/authorize?client_id=1280657761272594463&response_type=code&redirect_uri=https%3A%2F%2Frarer.io&scope=identify"));
  } else {
    const t = document.createElement("div");
    t.textContent = e.username;
    t.style.color = "white";
    const o = document.createElement("button");
    o.classList.add(r.button, r.buttonRed);
    o.textContent = "Sign Out";
    o.addEventListener("click", () => f({ kind: l.LoginRequest, method: me.NoAccount }));
    He.append(t, o);
  }
}
function It(e) {
  xe.replaceChildren();
  switch (e) {
    case "loading":
      const t = document.createElement("span");
      t.textContent = "Loading...";
      xe.append(t);
      break;
    case "loaded":
      const t = document.createElement("div");
      t.className = Te.mainTitle;
      const o = document.createElement("button");
      o.textContent = "Enter Game";
      o.classList.add(r.button);
      o.style.backgroundColor = "#28a745";
      o.addEventListener("click", () => {
        const s = Ee.options[Ee.selectedIndex];
        if (s) f({ kind: l.EnterRequest, lobbyId: parseInt(s.value) });
      });
      xe.append(t, Ee, o);
      break;
    case "disconnected":
      const t = document.createElement("span");
      t.textContent = "Disconnected!";
      const o = document.createElement("button");
      o.textContent = "Reconnect";
      o.classList.add(r.button);
      o.style.backgroundColor = "#007bff";
      o.addEventListener("click", () => yo());
      xe.append(t, o);
      break;
  }
}
function $i() {
  let e = Qo;
  setInterval(() => {
    e -= 1;
    Ve.textContent = "The game is restarting for an update. You'll be kicked in: " + e;
    Ve.style.display = "";
    if (e === 0) document.body.innerHTML = "Please use Ctrl+F5 to hard refresh and get the updated client";
  }, 1000);
}
function Ot() {}
function Fs() {}
function $s() {}
function _t(cb) { setTimeout(cb, 0); }
function Vs() { f({ kind: l.InventoryRequest }); }
function _a(s) {
  const modal = document.createElement("div");
  modal.className = `${r.modal} ${r.modalShow}`;
  modal.innerHTML = `
    <div class="${r.modalHeader}">You rolled: ${Bt[s.rolledAura]}</div>
    <div class="${r.modalActions}">
      <button class="${r.button} ${r.buttonGreen}" id="keep">Keep</button>
      <button class="${r.button} ${r.buttonRed}" id="discard">Discard</button>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector("#keep").addEventListener("click", () => {
    f({ kind: l.RollKeep, isKeeping: true });
    modal.remove();
  });
  modal.querySelector("#discard").addEventListener("click", () => {
    f({ kind: l.RollKeep, isKeeping: false });
    modal.remove();
  });
}
function Js(s) {
  const modal = document.createElement("div");
  modal.className = `${r.modal} ${r.modalShow}`;
  let html = `<div class="${r.modalHeader}">Inventory</div>`;
  s.auras.forEach((aura, i) => {
    html += `<div class="${r.auraBox} ${i === s.equippedIndex ? r.selected : ''}" style="background-color: ${auraColors[aura]}">
      ${Bt[aura]}
      <button class="${r.button}" onclick="f({kind: ${l.InventoryEquip}, index: ${i}})">Equip</button>
      <button class="${r.button} ${r.buttonRed}" onclick="f({kind: ${l.InventoryDiscard}, index: ${i}})">Discard</button>
    </div>`;
  });
  modal.innerHTML = html + `<div class="${r.modalFooter}"><button class="${r.buttonClose}" id="close">Close</button></div>`;
  document.body.appendChild(modal);
  modal.querySelector("#close").addEventListener("click", () => modal.remove());
}
function ya(s) {
  const modal = document.createElement("div");
  modal.className = `${r.modal} ${r.modalShow}`;
  let html = `<div class="${r.modalHeader}">Shop (Money: ${s.money})</div>`;
  s.prices.forEach(p => {
    const itemName = I[p.item] ? I[p.item] : "Unknown";
    html += `<div class="${r.auraBox}">${itemName}: ${p.price ? p.price : 'Owned'}
      ${p.price ? `<button class="${r.button}" onclick="f({kind: ${l.BuyRequest}, item: ${p.item}})">Buy</button>` : ''}</div>`;
  });
  modal.innerHTML = html + `<div class="${r.modalFooter}"><button class="${r.buttonClose}" id="close">Close</button></div>`;
  document.body.appendChild(modal);
  modal.querySelector("#close").addEventListener("click", () => modal.remove());
}
function ba(s) {
  const modal = document.createElement("div");
  modal.className = `${r.modal} ${r.modalShow}`;
  modal.innerHTML = `<div class="${r.modalHeader}">Purchased ${I[s.item] || "Item"}!</div>
    <div class="${r.modalFooter}"><button class="${r.buttonClose}" id="close">Close</button></div>`;
  document.body.appendChild(modal);
  modal.querySelector("#close").addEventListener("click", () => modal.remove());
}
function Ma(s) {
  const modal = document.createElement("div");
  modal.className = `${r.modal} ${r.modalShow}`;
  modal.innerHTML = `<div class="${r.modalHeader}">${s.error ? `Error: ${s.error}` : "Username Updated"}</div>
    <div class="${r.modalFooter}"><button class="${r.buttonClose}" id="close">Close</button></div>`;
  document.body.appendChild(modal);
  modal.querySelector("#close").addEventListener("click", () => modal.remove());
}
function Ra(s) {
  const modal = document.createElement("div");
  modal.className = `${r.modal} ${r.modalShow}`;
  let html = `<div class="${r.modalHeader}">Crafting</div>`;
  Object.values(qt).forEach(recipe => {
    const canCraft = recipe.requiredAuras.every(([aura, count]) => s.inventory.filter(a => a === aura).length >= count);
    html += `<div class="${r.auraBox}">${recipe.name}: ${recipe.description}
      <button class="${r.button} ${canCraft ? '' : r.buttonDisabled}" onclick="f({kind: ${l.RollRequest}, recipeKind: ${recipe.id}, fast: false})">${canCraft ? 'Craft' : 'Locked'}</button></div>`;
  });
  modal.innerHTML = html + `<div class="${r.modalFooter}"><button class="${r.buttonClose}" id="close">Close</button></div>`;
  document.body.appendChild(modal);
  modal.querySelector("#close").addEventListener("click", () => modal.remove());
}
function Ps(s) {
  const modal = document.createElement("div");
  modal.className = `${r.modal} ${r.modalShow}`;
  modal.innerHTML = `<div class="${r.modalHeader}">${s.message}</div>
    <div class="${r.modalFooter}"><button class="${r.buttonClose}" id="close">Close</button></div>`;
  document.body.appendChild(modal);
  modal.querySelector("#close").addEventListener("click", () => modal.remove());
}
function bo() {
  const e = window.innerWidth, t = window.innerHeight, o = window.devicePixelRatio;
  fe.width = e * o; fe.height = t * o;
  const s = Math.max(e / 1728, t / 992);
  F.style.transform = j.style.transform = `scale(${s})`;
  F.style.width = j.style.width = `${e / s}px`;
  F.style.height = j.style.height = `${t / s}px`;
}
bo();
window.addEventListener("resize", bo);
document.addEventListener("contextmenu", (e) => e.preventDefault());
yo();
console.log("%cStop!", "color:red; font-size:60px; font-weight: 700;");
console.log("%cIf someone told you to copy/paste something here it is a scam and will give them access to your account.", "font-size: 18px;");