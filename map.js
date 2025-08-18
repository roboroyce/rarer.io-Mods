// Updated map.js with fixes for chat rendering, keyboard movement, and added chat input UI

var xo = Object.defineProperty;
var So = (e, t, o) =>
  t in e
    ? xo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (e[t] = o);
var R = (e, t, o) => So(e, typeof t != "symbol" ? t + "" : t, o);
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
const wo = "a",
  ko = "b",
  Ao = "c",
  Eo = "d",
  Ro = "e",
  Lo = "f",
  Co = "g",
  _o = "h",
  To = "i",
  Io = "j",
  Bo = "k",
  Mo = "l",
  Do = "m",
  No = "n",
  $o = "o",
  Fo = "p",
  qo = "q",
  Po = "r",
  Uo = "s",
  Oo = "t",
  r = {
    button: wo,
    buttonGreen: ko,
    buttonRed: Ao,
    buttonDiscord: Eo,
    buttonGray: Ro,
    buttonDisabled: Lo,
    buttonClose: Co,
    tooltip: _o,
    centerRight: To,
    bottomLeft: Io,
    bottomCenter: Bo,
    bottomRight: Mo,
    tooltipContainer: Do,
    modal: No,
    modalShow: $o,
    modalActions: Fo,
    modalHeader: qo,
    modalFooter: Po,
    auraBox: Uo,
    selected: Oo
  },
  Wo = "B",
  Go = { canvas: Wo },
  fe = document.createElement("canvas");
fe.className = Go.canvas;
const Ko = "C",
  Ho = "D",
  Yo = "E",
  zo = "F",
  jo = "G",
  Xo = "H",
  Te = {
    menu: Ko,
    mainSection: Ho,
    mainTitle: Yo,
    topLeftSection: zo,
    topRightSection: jo,
    lobbySelector: Xo
  },
  hn = 2e3,
  Vo = 32,
  yn = 64,
  Jo = 120,
  Zo = 30,
  Qo = 20,
  n = {
    Common: 1,
    Uncommon: 2,
    Rare: 3,
    Epic: 4,
    Spark: 5,
    Ripple: 6,
    Stellar: 7,
    Enraged: 8,
    Confetti: 9,
    Firefly: 10,
    Toxic: 11,
    Ignited: 12,
    Starfish: 13,
    Chromatic: 14,
    Vortex: 15,
    Lotus: 16,
    Angelic: 17,
    Starboard: 18,
    Inferno: 19,
    Kaleidoscope: 20,
    Astral: 21,
    Demonic: 22,
    Miasma: 23,
    Tempest: 24,
    Commmon: 29
  },
  Bt = {
    [n.Common]: "Common",
    [n.Uncommon]: "Uncommon",
    [n.Rare]: "Rare",
    [n.Epic]: "Epic",
    [n.Spark]: "Spark",
    [n.Ripple]: "Ripple",
    [n.Stellar]: "Stellar",
    [n.Enraged]: "Enraged",
    [n.Confetti]: "Confetti",
    [n.Firefly]: "Firefly",
    [n.Toxic]: "Toxic",
    [n.Ignited]: "Ignited",
    [n.Starfish]: "Starfish",
    [n.Chromatic]: "Chromatic",
    [n.Vortex]: "Vortex",
    [n.Lotus]: "Lotus",
    [n.Angelic]: "Angelic",
    [n.Starboard]: "Starboard",
    [n.Inferno]: "Inferno",
    [n.Kaleidoscope]: "Kaleidoscope",
    [n.Astral]: "Astral",
    [n.Demonic]: "Demonic",
    [n.Miasma]: "Miasma",
    [n.Tempest]: "Tempest",
    [n.Commmon]: "Commmon"
  },
  Bn = {
    [n.Common]: 2,
    [n.Uncommon]: 4,
    [n.Rare]: 10,
    [n.Epic]: 20,
    [n.Spark]: 25,
    [n.Ripple]: 33,
    [n.Stellar]: 50,
    [n.Enraged]: 200,
    [n.Confetti]: 400,
    [n.Firefly]: 1e3,
    [n.Toxic]: 2e3,
    [n.Ignited]: 2500,
    [n.Starfish]: 3333,
    [n.Chromatic]: 5e3,
    [n.Vortex]: 2e4,
    [n.Lotus]: 4e4,
    [n.Angelic]: 1e5,
    [n.Starboard]: 2e5,
    [n.Inferno]: 25e4,
    [n.Kaleidoscope]: 333333,
    [n.Astral]: 5e5,
    [n.Demonic]: 2e6,
    [n.Miasma]: 4e6,
    [n.Tempest]: 1e7,
    [n.Commmon]: 1e8
  },
  b = {
    NoRecipe: 1,
    FourLeafClover: 2,
    PlayWithFire: 3,
    RisingTide: 4,
    StarlitNight: 5,
    LightVsDark: 6,
    PartyOn: 7,
    MegaI: 8,
    UpgradeA: 9,
    UpgradeB: 10,
    UpgradeC: 11,
    UpgradeD: 12
  },
  qt = {
    [b.NoRecipe]: {
      name: "No Recipe",
      description: "Just a default roll",
      requiredAuras: [],
      weights: [
        [n.Common, 50000014],
        [n.Uncommon, 25e6],
        [n.Rare, 1e7],
        [n.Epic, 5e6],
        [n.Spark, 4e6],
        [n.Ripple, 3e6],
        [n.Stellar, 2e6],
        [n.Enraged, 5e5],
        [n.Confetti, 25e4],
        [n.Firefly, 1e5],
        [n.Toxic, 5e4],
        [n.Ignited, 4e4],
        [n.Starfish, 3e4],
        [n.Chromatic, 2e4],
        [n.Vortex, 5e3],
        [n.Lotus, 2500],
        [n.Angelic, 1e3],
        [n.Starboard, 500],
        [n.Inferno, 400],
        [n.Kaleidoscope, 300],
        [n.Astral, 200],
        [n.Demonic, 50],
        [n.Miasma, 25],
        [n.Tempest, 10],
        [n.Commmon, 1]
      ]
    },
    [b.FourLeafClover]: {
      name: "4 Leaf Clover",
      description: "4x luck for all auras",
      requiredAuras: [
        [n.Common, 1],
        [n.Uncommon, 1],
        [n.Rare, 1],
        [n.Epic, 1]
      ],
      weights: [
        [n.Rare, 40000056],
        [n.Epic, 2e7],
        [n.Spark, 16e6],
        [n.Ripple, 12e6],
        [n.Stellar, 8e6],
        [n.Enraged, 2e6],
        [n.Confetti, 1e6],
        [n.Firefly, 4e5],
        [n.Toxic, 2e5],
        [n.Ignited, 16e4],
        [n.Starfish, 12e4],
        [n.Chromatic, 8e4],
        [n.Vortex, 2e4],
        [n.Lotus, 1e4],
        [n.Angelic, 4e3],
        [n.Starboard, 2e3],
        [n.Inferno, 1600],
        [n.Kaleidoscope, 1200],
        [n.Astral, 800],
        [n.Demonic, 200],
        [n.Miasma, 100],
        [n.Tempest, 40],
        [n.Commmon, 4]
      ]
    },
    [b.PlayWithFire]: {
      name: "Play With Fire",
      description: "150x luck for fire auras",
      requiredAuras: [[n.Spark, 4]],
      weights: [
        [n.Common, 3394e4],
        [n.Spark, 6e7],
        [n.Ignited, 6e6],
        [n.Inferno, 6e4]
      ]
    },
    [b.RisingTide]: {
      name: "Rising Tide",
      description: "200x luck for water auras",
      requiredAuras: [[n.Ripple, 4]],
      weights: [
        [n.Common, 339e5],
        [n.Ripple, 6e7],
        [n.Starfish, 6e6],
        [n.Starboard, 1e5]
      ]
    },
    [b.StarlitNight]: {
      name: "Starlit Night",
      description: "250x luck for light auras",
      requiredAuras: [[n.Stellar, 4]],
      weights: [
        [n.Common, 3495e4],
        [n.Stellar, 4e7],
        [n.Firefly, 25e6],
        [n.Astral, 5e4]
      ]
    },
    [b.LightVsDark]: {
      name: "Light vs. Dark",
      description: "100x luck for winged auras",
      requiredAuras: [[n.Enraged, 3]],
      weights: [
        [n.Common, 49895e3],
        [n.Enraged, 5e7],
        [n.Angelic, 1e5],
        [n.Demonic, 5e3]
      ]
    },
    [b.PartyOn]: {
      name: "Party On!",
      description: "100x luck for all auras",
      requiredAuras: [[n.Confetti, 2]],
      weights: [
        [n.Enraged, 50001400],
        [n.Confetti, 25e6],
        [n.Firefly, 1e7],
        [n.Toxic, 5e6],
        [n.Ignited, 4e6],
        [n.Starfish, 3e6],
        [n.Chromatic, 2e6],
        [n.Vortex, 5e5],
        [n.Lotus, 25e4],
        [n.Angelic, 1e5],
        [n.Starboard, 5e4],
        [n.Inferno, 4e4],
        [n.Kaleidoscope, 3e4],
        [n.Astral, 2e4],
        [n.Demonic, 5e3],
        [n.Miasma, 2500],
        [n.Tempest, 1e3],
        [n.Commmon, 100]
      ]
    },
    [b.MegaI]: {
      name: "Mega Roll I",
      description: "10,000x luck for all auras",
      requiredAuras: [[n.Chromatic, 10]],
      weights: [
        [n.Vortex, 5014e4],
        [n.Lotus, 25e6],
        [n.Angelic, 1e7],
        [n.Starboard, 5e6],
        [n.Inferno, 4e6],
        [n.Kaleidoscope, 3e6],
        [n.Astral, 2e6],
        [n.Demonic, 5e5],
        [n.Miasma, 25e4],
        [n.Tempest, 1e5],
        [n.Commmon, 1e4]
      ]
    },
    [b.UpgradeA]: {
      name: "Firefly Upgrade",
      description: "50% of upgrading to Toxic",
      requiredAuras: [[n.Firefly, 1]],
      weights: [
        [n.Common, 5e7],
        [n.Toxic, 5e7]
      ]
    },
    [b.UpgradeB]: {
      name: "Toxic Upgrade",
      description: "50% of upgrading to Ignited",
      requiredAuras: [[n.Toxic, 1]],
      weights: [
        [n.Common, 5e7],
        [n.Ignited, 5e7]
      ]
    },
    [b.UpgradeC]: {
      name: "Ignited Upgrade",
      description: "50% of upgrading to Starfish",
      requiredAuras: [[n.Ignited, 1]],
      weights: [
        [n.Common, 5e7],
        [n.Starfish, 5e7]
      ]
    },
    [b.UpgradeD]: {
      name: "Starfish Upgrade",
      description: "50% of upgrading to Chromatic",
      requiredAuras: [[n.Starfish, 1]],
      weights: [
        [n.Common, 5e7],
        [n.Chromatic, 5e7]
      ]
    }
  };


  const minX = 32;
  const minY = 32;
  const maxX = 1968;
  const maxY = 1968;
  
  const mapContainerClass = "map-container";
  const mapClass = "map";
  const mapContainer = document.createElement("div");
  mapContainer.className = mapContainerClass;
  mapContainer.style.display = "none";
  const map = document.createElement("div");
  map.className = mapClass;
  mapContainer.appendChild(map);
  document.body.appendChild(mapContainer);
  
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
  `;
  document.head.appendChild(mapStyle);
  
  function toggleMap() {
    const chatInput = document.querySelector('.chat-input');
    if (chatInput && document.activeElement === chatInput) {
      return;
    }
    
    const chatWindow = document.querySelector('.chat-window');
    const isChatOpen = chatWindow && window.getComputedStyle(chatWindow).display !== 'none';
    
    const startScreen = document.querySelector('.start-screen');
    const isStartScreen = startScreen && window.getComputedStyle(startScreen).display !== 'none';
    
    if (isChatOpen || isStartScreen) {
      return;
    }
    
    if (mapContainer.style.display === "none") {
      mapContainer.style.display = "block";
      if (typeof window.updateMapFromGameState === 'function') {
        window.updateMapFromGameState();
      } else {
        console.error('updateMapFromGameState function not found');
      }
    } else {
      mapContainer.style.display = "none";
    }
  }
  
  window.toggleMap = toggleMap;
  
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
  
  // Add keyboard listeners for map toggle and movement
  let keysPressed = new Set();
  let moveAngle = null;
  let mouseAngle = 0;

  document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    if (['w', 'a', 's', 'd'].includes(key)) {
      keysPressed.add(key);
      updateMoveAngle();
      event.preventDefault();
    } else if (key === 'm') {
      toggleMap();
      event.preventDefault();
    } else if (key === 'enter') {
      if (!chatInput) createChatInput();
      chatInput.focus();
      event.preventDefault();
    }
  });

  document.addEventListener('keyup', function(event) {
    const key = event.key.toLowerCase();
    if (keysPressed.has(key)) {
      keysPressed.delete(key);
      updateMoveAngle();
    }
  });

  function updateMoveAngle() {
    if (keysPressed.size === 0) {
      moveAngle = null;
      sendInput();
      return;
    }
    let dx = 0, dy = 0;
    if (keysPressed.has('w')) dy -= 1;
    if (keysPressed.has('s')) dy += 1;
    if (keysPressed.has('a')) dx -= 1;
    if (keysPressed.has('d')) dx += 1;
    if (dx === 0 && dy === 0) {
      moveAngle = null;
    } else {
      moveAngle = Math.atan2(dy, dx);
    }
    sendInput();
  }

  // Mouse movement for facing angle
  fe.addEventListener('mousemove', (e) => {
    if (!K || !G) return;
    const rect = fe.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const dx = e.clientX - rect.left - centerX;
    const dy = e.clientY - rect.top - centerY;
    mouseAngle = Math.atan2(dy, dx);
    sendInput();
  });

  // Function to send input packet
  function sendInput() {
    if (!K || !G) return;
    f({ kind: l.Input, angle: mouseAngle, moveAngle });
  }

  // Chat input UI
  let chatInput = null;
  function createChatInput() {
    chatInput = document.createElement('input');
    chatInput.className = 'chat-input';
    chatInput.type = 'text';
    chatInput.placeholder = 'Type message and press Enter...';
    chatInput.style.position = 'absolute';
    chatInput.style.bottom = '10px';
    chatInput.style.left = '50%';
    chatInput.style.transform = 'translateX(-50%)';
    chatInput.style.width = '300px';
    chatInput.style.display = 'none';
    F.appendChild(chatInput);

    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const message = chatInput.value.trim();
        if (message) {
          f({ kind: l.Chat, message });
        }
        chatInput.value = '';
        chatInput.blur();
      } else if (e.key === 'Escape') {
        chatInput.value = '';
        chatInput.blur();
      }
    });

    chatInput.addEventListener('focus', () => {
      chatInput.style.display = 'block';
    });

    chatInput.addEventListener('blur', () => {
      chatInput.style.display = 'none';
    });
  }

  window.updateMapFromGameState = function() {
    if (typeof window.de !== 'undefined' && window.de) {
      updateMap(window.de);
    }
  };
  
  function startMapUpdates() {
    setInterval(() => {
      if (mapContainer.style.display !== "none") {
        if (window.de && window.de.players && window.de.players.length > 0) {
          updateMap(window.de);
        }
      }
    }, 100);
  }
  
  startMapUpdates();
  
  function es(e, t) {
    const o = qt[t];
    for (const [s, i] of o.weights) {
      if (e < i) return s;
      e -= i;
    }
    return n.Common;
  }
  for (const e of Object.values(qt)) {
    let t = 0;
    for (const o of e.weights) t += o[1];
    if (t !== 1e8) throw new Error(`${e.name} recipe weights sum to ${t}`);
  }
  const I = { InventorySlot: 1, FastRoll: 2, AutoRoll: 3, LuckBoost: 4 },
    ts = {
      [I.InventorySlot]: "Inventory Slot",
      [I.FastRoll]: "Fast Roll",
      [I.AutoRoll]: "Auto Roll",
      [I.LuckBoost]: "Luck Boost"
    };
class Pt {
  constructor() {
    R(this, "a", 1);
    R(this, "b", 0);
    R(this, "c", 0);
    R(this, "d", 1);
    R(this, "e", 0);
    R(this, "f", 0);
  }
  copy(t) {
    (this.a = t.a),
      (this.b = t.b),
      (this.c = t.c),
      (this.d = t.d),
      (this.e = t.e),
      (this.f = t.f);
  }
  makeScale(t) {
    (this.a = t),
      (this.b = 0),
      (this.c = 0),
      (this.d = t),
      (this.e = 0),
      (this.f = 0);
  }
  rotate(t) {
    const o = this.a,
      s = this.b,
      i = this.c,
      a = this.d,
      c = Math.sin(t),
      p = Math.cos(t);
    (this.a = o * p + i * c),
      (this.b = s * p + a * c),
      (this.c = o * -c + i * p),
      (this.d = s * -c + a * p);
  }
  scale(t) {
    (this.a *= t), (this.b *= t), (this.c *= t), (this.d *= t);
  }
  translate(t, o) {
    (this.e += this.a * t + this.c * o), (this.f += this.b * t + this.d * o);
  }
}
const h = Math.PI,
  B = 2 * h;
function ue(e, t, o) {
  return e + (t - e) * o;
}
function ns(e, t, o) {
  let s = (t - e) % B;
  return s < -h ? (s += B) : s > h && (s -= B), e + s * o;
}
function ne(e, t) {
  return Math.random() * (t - e) + e;
}
function os(e, t) {
  let o = 0;
  for (const s of e) s === t && ++o;
  return o;
}
class bn {
  constructor(t, o) {
    R(this, "x");
    R(this, "y");
    (this.x = t), (this.y = o);
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  normalize() {
    this.divideScalar(this.length() || 1);
  }
  applyMatrix2D(t) {
    const o = this.x,
      s = this.y;
    (this.x = t.a * o + t.c * s + t.e), (this.y = t.b * o + t.d * s + t.f);
  }
}
const Mn = new Uint8Array(4096),
  Ut = new DataView(Mn.buffer);
let oe = 0;
const ss = new TextEncoder();
function as(e) {
  switch (((oe = 0), W(e.kind), e.kind)) {
    case l.LoginRequest: {
      W(e.method),
        e.method === me.NoAccount ||
          (e.method === me.GuestAccount
            ? (J(e.accountId), J(e.password))
            : e.method === me.DiscordCode &&
              (J(e.code), J(e.accountId), J(e.password)));
      break;
    }
    case l.EnterRequest: {
      W(e.lobbyId);
      break;
    }
    case l.Input: {
      vn(e.angle), it(e.moveAngle, vn);
      break;
    }
    case l.RollRequest: {
      W(e.recipeKind), ct(e.fast);
      break;
    }
    case l.RollKeep: {
      ct(e.isKeeping);
      break;
    }
    case l.InventoryEquip: {
      Ct(e.index);
      break;
    }
    case l.InventoryDiscard: {
      Ct(e.index);
      break;
    }
    case l.UsernameRequest: {
      J(e.username);
      break;
    }
    case l.Chat: {
      J(e.message);
      break;
    }
    case l.BuyRequest: {
      W(e.item);
      break;
    }
    case l.SetFields: {
      it(e.money, Ct), it(e.auras, (t) => Dn(t, W)), it(e.discordId, J);
      break;
    }
  }
  return Mn.subarray(0, oe);
}
function W(e) {
  Ut.setUint8(oe, e), (oe += 1);
}
function Ct(e) {
  Ut.setUint32(oe, e), (oe += 4);
}
function vn(e) {
  Ut.setFloat32(oe, e), (oe += 4);
}
function ct(e) {
  W(e ? 1 : 0);
}
function Dn(e, t) {
  W(e.length);
  for (let o = 0; o < e.length; o++) t(e[o]);
}
function it(e, t) {
  e === null ? ct(!1) : (ct(!0), t(e));
}
let fo = { kind: l.State, players: [], currentDrop: null },
  de = { kind: l.State, players: [], currentDrop: null },
  Ft = -1;
function Li(e) {
  (Ft = performance.now()), (fo = de), (de = e);
}
const L = [],
  _n = new Fn(Ri),
  d = fe.getContext("2d");
let Tn = 0;
const le = new Pt();
function Ci() {
  const e = performance.now(),
    t = e - Tn;
  if (((Tn = e), !K || !G || Ft === -1)) {
    An(e / 100, e / 100), In();
    return;
  }
  let o = 0;
  for (const a of L) de.players.find((c) => c.id === a.id) && (L[o++] = a);
  L.length = o;
  const s = Math.min((e - Ft) / Zo, 1);
  for (const a of de.players) {
    const c = fo.players.find((qe) => qe.id === a.id);
    if (c === void 0) continue;
    const p = ue(c.x, a.x, s),
      w = ue(c.y, a.y, s),
      V = a.id === G ? mouseAngle : ns(c.angle, a.angle, s),
      re = L.find((qe) => qe.id === a.id);
    if (re === void 0) {
      const qe = Cn(a.equippedAura);
      L.push({
        id: a.id,
        x: p,
        y: w,
        angle: V,
        emitters: qe,
        aura: a.equippedAura,
        chatMessage: a.chatMessage
      });
    } else
      (re.x = p),
        (re.y = w),
        (re.angle = V),
        (re.chatMessage = a.chatMessage),
        a.equippedAura !== re.aura &&
          ((re.emitters = Cn(a.equippedAura)), (re.aura = a.equippedAura));
  }
  L.sort((a, c) => (c.id === G ? -1 : a.id === G ? 1 : a.id - c.id));
  const i = L[L.length - 1];
  An(i.x, i.y), In();
  for (const a of L) {
    if (mt && a.id !== G) continue;
    const c = {
      playerX: a.x,
      playerY: a.y,
      playerAngle: a.angle,
      deltaTime: t / 1e3,
      currentTime: e / 1e3
    };
    for (const p of a.emitters) p.update(c), p.render(d, c);
  }
  for (const a of L) {
    le.copy(P);
    let { x: c, y: p } = a;
    a.aura === n.Enraged && ((c += ne(-2, 2)), (p += ne(-2, 2)));
    le.translate(c, p),
      le.rotate(a.angle),
      d.setTransform(le),
      a.aura === n.Enraged
        ? (d.fillStyle = "#f53131")
        : a.aura === n.Toxic
        ? (d.fillStyle = "#f4ff3f")
        : a.aura === n.Inferno
        ? (d.fillStyle = "#222224")
        : a.aura === n.Astral
        ? (d.fillStyle = "#4823c8")
        : a.aura === n.Demonic
        ? (d.fillStyle = "#551111")
        : a.aura === n.Miasma
        ? (d.fillStyle = "#222224")
        : a.aura === n.Tempest
        ? (d.fillStyle = "#23316e")
        : (d.fillStyle = "#f7c574"),
      a.aura === n.Astral
        ? (d.strokeStyle = "#ffffff")
        : (d.strokeStyle = "#000000"),
      (d.lineWidth = 3),
      d.beginPath(),
      d.arc(25.6, -20.8, 10.56, 0, B),
      d.moveTo(36.16, 20.8),
      d.arc(25.6, 20.8, 10.56, 0, B),
      d.fill(),
      d.stroke(),
      d.beginPath(),
      d.arc(0, 0, Vo, 0, B),
      d.fill(),
      d.stroke();
  }
  for (const a of L) {
    le.copy(P), le.translate(a.x, a.y), d.setTransform(le);
    const c = Et(a.id);
    (d.font = "bold 20px Inter Variable"),
      (d.textAlign = "center"),
      (d.strokeStyle = "black"),
      (d.lineWidth = 4),
      d.strokeText(c, 0, 65),
      (d.fillStyle = "#ffffff"),
      d.fillText(c, 0, 65);
    if (a.chatMessage) {
      d.font = "16px Inter Variable";
      d.strokeText(a.chatMessage, 0, 90);
      d.fillText(a.chatMessage, 0, 90);
    }
    if (a.aura !== null) {
      const p = Da(a.aura);
      d.drawImage(p, -100, -135, 200, 100);
    }
  }
  if (de.currentDrop !== null) {
    const a = {
      playerX: de.currentDrop.x,
      playerY: de.currentDrop.y,
      playerAngle: 0,
      deltaTime: t / 1e3,
      currentTime: e / 1e3
    };
    _n.update(a), _n.render(d, a);
  }
}
function In() {
  const e = fe.width,
    t = fe.height;
  d.resetTransform(), (d.fillStyle = ps), d.fillRect(0, 0, e, t);
  const o = new bn(0, 0);
  o.applyMatrix2D(P);
  const s = new bn(hn, hn);
  s.applyMatrix2D(P),
    K &&
      ((d.fillStyle = fs),
      o.x > 0 && d.fillRect(0, 0, o.x, t),
      o.y > 0 && d.fillRect(0, 0, e, o.y),
      s.x < e && d.fillRect(s.x, 0, e, t),
      s.y < t && d.fillRect(0, s.y, e, t));
  const i = hs * P.a;
  (o.x %= i), (o.y %= i), d.beginPath();
  for (let a = o.x; a <= e; a += i) d.moveTo(a, 0), d.lineTo(a, t);
  for (let a = o.y; a <= t; a += i) d.moveTo(0, a), d.lineTo(e, a);
  (d.strokeStyle = gs), (d.lineWidth = 1), d.stroke();
}
const _i = "u",
  Ti = "v",
  go = { hud: _i, restartIncomingText: Ti },
  Ii = "wa",
  Bi = { leftButtons: Ii },
  st = document.createElement("div");
st.className = Bi.leftButtons;
const Mi = X({
    parentDiv: st,
    tooltipText: "Inventory",
    position: "centerRight",
    kind: "icon",
    iconUrl: "url(/icons/inventory.svg)"
  }),
  Di = X({
    parentDiv: st,
    tooltipText: "Crafting",
    position: "centerRight",
    kind: "icon",
    iconUrl: "url(/icons/crafting.svg)"
  }),
  Ni = X({
    parentDiv: st,
    tooltipText: "Shop",
    position: "centerRight",
    kind: "icon",
    iconUrl: "url(/icons/shop.svg)"
  });
Mi.addEventListener("click", () => {
  Vs();
});
Di.addEventListener("click", () => {
  f({ kind: l.CraftingRequest });
});
Ni.addEventListener("click", () => {
  f({ kind: l.ShopRequest });
});
const F = document.createElement("div");
F.className = go.hud;
F.style.display = "none";
const Ve = document.createElement("div");
Ve.className = go.restartIncomingText;
Ve.style.display = "none";
function $i() {
  let e = Qo;
  setInterval(() => {
    (e -= 1),
      (Ve.textContent =
        "The game is restarting for an update. You'll be kicked in: " + e),
      (Ve.style.display = ""),
      e === 0 &&
        (document.body.innerHTML =
          "Please use Ctrl+F5 to hard refresh and get the updated client");
  }, 1e3);
}
F.append(ut, st, z, M, Je, vt, Ve, Qe, De, we, se, Ne, ie, Ie, Me, Be);
let te = null,
  G = null,
  K = !1;
function f(e) {
  te && te.readyState === WebSocket.OPEN && te.send(as(e));
}
const ho = new Map();
function Et(e) {
  return ho.get(e) ?? "???";
}
function yo() {
  It("loading"), (te = new WebSocket(ys)), (te.binaryType = "arraybuffer");
  const t = new URLSearchParams(window.location.search).get("code");
  t !== null && window.history.replaceState({}, "", window.location.pathname),
    te.addEventListener("open", () => {
      f({ kind: l.LobbyRequest });
      const o = localStorage.getItem("accountId"),
        s = localStorage.getItem("password");
      f(
        o === null || s === null
          ? { kind: l.LoginRequest, method: me.NoAccount }
          : t !== null
          ? {
              kind: l.LoginRequest,
              method: me.DiscordCode,
              code: t,
              accountId: o,
              password: s
            }
          : {
              kind: l.LoginRequest,
              method: me.GuestAccount,
              accountId: o,
              password: s
            }
      );
    }),
    te.addEventListener("close", () => {
      K && Ot(),
        It("disconnected"),
        _t(() => {
          (F.style.display = "none"),
            (j.style.display = ""),
            (K = !1),
            y(null),
            Rn();
        });
    }),
    te.addEventListener("message", (o) => {
      if (!(o.data instanceof ArrayBuffer)) return;
      const s = rs(o.data);
      switch (s.kind) {
        case l.LoginResponse: {
          localStorage.setItem("accountId", s.accountId),
            localStorage.setItem("password", s.password),
            Ui(s),
            It("loaded"),
            s.discordAvatarURL !== null && s.username === "Guest" && Ba();
          break;
        }
        case l.EnterResponse: {
          (G = s.playerId), Et(G).startsWith("Guest") || $s();
          createChatInput(); // Create chat input when entering game
          break;
        }
        case l.LeaveResponse: {
          f({ kind: l.LobbyRequest }),
            _t(() => {
              (F.style.display = "none"),
                (j.style.display = ""),
                (K = !1),
                Rn();
            });
          break;
        }
        case l.State: {
          Li(s),
            ws(s),
            qs(s),
            K ||
              _t(() => {
                (j.style.display = "none"), (F.style.display = ""), (K = !0);
              });
          break;
        }
        case l.PlayerNames: {
          for (let { id: i, username: a } of s.names)
            a === "Guest" && (a += i), ho.set(i, a);
          break;
        }
        case l.RollResponse: {
          _a(s);
          break;
        }
        case l.InventoryResponse: {
          Js(s);
          break;
        }
        case l.ShopResponse: {
          ya(s);
          break;
        }
        case l.BuyResponse: {
          ba(s);
          break;
        }
        case l.UsernameResponse: {
          Ma(s);
          break;
        }
        case l.CraftingResponse: {
          Ra(s);
          break;
        }
        case l.LobbyResponse: {
          Pi(s);
          break;
        }
        case l.RestartIncoming: {
          $i();
          break;
        }
        case l.ServerBroadcast: {
          Ps(s);
          break;
        }
      }
    });
}
const j = document.createElement("div");
j.className = Te.menu;
const xe = document.createElement("div");
xe.className = Te.mainSection;
const Rt = document.createElement("div");
Rt.className = Te.topLeftSection;
const He = document.createElement("div");
He.className = Te.topRightSection;
const Fi = X({
    parentDiv: Rt,
    tooltipText: "Changelog",
    position: "bottomLeft",
    kind: "icon",
    iconUrl: "url(/icons/changelog.svg)"
  }),
  qi = X({
    parentDiv: Rt,
    tooltipText: "Discord Server",
    position: "bottomCenter",
    kind: "icon",
    iconUrl: "url(/icons/discord.svg)"
  });
Fi.addEventListener("click", () => {
  window.open("/changelog.txt", "_blank");
});
qi.addEventListener("click", () => {
  window.open("https://discord.gg/at26WZ4RDC", "_blank");
});
const Ee = document.createElement("select");
Ee.className = Te.lobbySelector;
function Pi(e) {
  Ee.replaceChildren();
  for (const t of e.lobbies) {
    const o = document.createElement("option");
    (o.value = "" + t.lobbyId),
      (o.textContent = `Lobby${t.lobbyId} (${t.currentPlayers}/${t.maxPlayers})`),
      Ee.appendChild(o);
  }
}
j.append(Rt, He, xe, yt, $e);
function Ui(e) {
  if ((He.replaceChildren(), e.discordAvatarURL === null)) {
    const t = X({
      parentDiv: He,
      tooltipText: "Save your progress across devices",
      position: "bottomRight",
      kind: "text",
      textContent: "Sign in with Discord"
    });
    t.classList.add(r.buttonDiscord),
      t.addEventListener("click", () => {
        window.open(
          "https://discord.com/oauth2/authorize?client_id=1280657761272594463&response_type=code&redirect_uri=https%3A%2F%2Frarer.io&scope=identify"
        );
      });
  } else {
    const t = document.createElement("img");
    t.src = e.discordAvatarURL;
    const o = document.createElement("button");
    o.classList.add(r.button, r.buttonRed),
      (o.textContent = "Sign Out"),
      o.addEventListener("click", () => {
        f({ kind: l.LoginRequest, method: me.NoAccount });
      }),
      He.append(t, o);
  }
}
function It(e) {
  switch ((xe.replaceChildren(), e)) {
    case "loading": {
      const t = document.createElement("span");
      (t.textContent = "Loading..."), xe.append(t);
      break;
    }
    case "loaded": {
      const t = document.createElement("div");
      t.className = Te.mainTitle;
      const o = document.createElement("button");
      (o.textContent = "Enter Game"),
        o.classList.add(r.button),
        o.addEventListener("click", () => {
          const s = Ee.options[Ee.selectedIndex];
          s &&
            (Fs(),
            Ot(),
            f({ kind: l.EnterRequest, lobbyId: parseInt(s.value) }));
        }),
        xe.append(t, Ee, o);
      break;
    }
    case "disconnected": {
      const t = document.createElement("span");
      t.textContent = "Disconnected!";
      const o = document.createElement("button");
      (o.textContent = "Reconnect"),
        o.classList.add(r.button),
        o.addEventListener("click", () => {
          yo();
        }),
        xe.append(t, o);
      break;
    }
  }
}
const Oi = "y",
  Wi = "z",
  Gi = "A",
  at = { joystick: Oi, joystickShow: Wi, innerJoystick: Gi },
  ye = document.createElement("div"),
  Lt = document.createElement("div");
ye.append(Lt);
ye.className = at.joystick;
Lt.className = at.innerJoystick;
let O = null;
document.addEventListener("touchstart", (e) => {
  if (O) return;
  const t = e.targetTouches[0];
  if (t === void 0 || t.target !== F) return;
  (O = t), ye.classList.add(at.joystickShow);
  const o = `calc(-50% + ${t.clientX}px)`,
    s = `calc(-50% + ${t.clientY}px)`;
  (ye.style.transform = `translate(${o}, ${s})`),
    (Lt.style.transform = "translate(calc(-50% + 50px), calc(-50% + 50px))");
});
document.addEventListener("touchmove", (e) => {
  if (!O) return;
  const t = e.targetTouches[0];
  if (t.identifier !== O.identifier) return;
  let o = t.clientX - O.clientX,
    s = t.clientY - O.clientY;
  gn(Math.atan2(s, o));
  const i = Math.sqrt(o * o + s * s);
  i > 50 && ((o *= 50 / i), (s *= 50 / i));
  const a = `calc(-50% + 50px + ${o}px)`,
    c = `calc(-50% + 50px + ${s}px)`;
  Lt.style.transform = `translate(${a}, ${c})`;
});
document.addEventListener("touchend", (e) => {
  !O ||
    e.changedTouches[0].identifier !== O.identifier ||
    (gn(null), (O = null), ye.classList.remove(at.joystickShow));
});
document.addEventListener("touchcancel", () => {
  gn(null), (O = null), ye.classList.remove(at.joystickShow);
});
document.body.append(fe, F, ye, j, dt);
function bo() {
  const e = window.innerWidth,
    t = window.innerHeight,
    o = window.devicePixelRatio;
  (fe.width = e * o), (fe.height = t * o);
  const s = Math.max(e / 1728, t / 992);
  (F.style.transform = j.style.transform = `scale(${s})`),
    (F.style.width = j.style.width = `${e / s}px`),
    (F.style.height = j.style.height = `${t / s}px`);
}
bo();
window.addEventListener("resize", bo);
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
function X(e) {
  const t = document.createElement("div");
  t.className = r.tooltipContainer;
  const o = document.createElement("button");
  (o.className = r.button),
    e.kind === "text"
      ? (o.textContent = e.textContent)
      : (o.style.backgroundImage = e.iconUrl);
  const s = document.createElement("div");
  return (
    (s.textContent = e.tooltipText),
    s.classList.add(r.tooltip, r[e.position]),
    t.append(o, s),
    e.parentDiv.append(t),
    o
  );
}
function gt(e) {
  let t = "";
  for (; e >= 1e3; )
    (t = "," + (e % 1e3).toString().padStart(3, "0") + t),
      (e = Math.floor(e / 1e3));
  return e + t;
}
function vo() {
  Ci(), window.requestAnimationFrame(vo);
}
window.requestAnimationFrame(vo);
yo();
const Ki = "color:red; font-size:60px; font-weight: 700;",
  Hi = "font-size: 18px;";
console.log("%cStop!", Ki);
console.log(
  "%cIf someone told you to copy/paste something here it is a scam and will give them access to your account.",
  Hi
);