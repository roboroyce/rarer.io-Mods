

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
  
  document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'm') {
      toggleMap();
    }
  });
  
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
function J(e) {
  const t = ss.encode(e);
  Dn(t, W);
}
let ht,
  ge = 0;
const is = new TextDecoder();
function rs(e) {
  (ht = new DataView(e)), (ge = 0);
  const t = S();
  switch (t) {
    case l.LoginResponse:
      return {
        kind: t,
        accountId: Q(),
        username: Q(),
        password: Q(),
        discordAvatarURL: Z(Q)
      };
    case l.EnterResponse:
      return { kind: t, playerId: S() };
    case l.State:
      return {
        kind: t,
        players: ce(() => ({
          id: S(),
          x: Ue(),
          y: Ue(),
          angle: Ue(),
          equippedAura: Z(Oe),
          numRolls: Pe(),
          chatMessage: Z(Q)
        })),
        currentDrop: Z(() => ({ x: Ue(), y: Ue() }))
      };
    case l.PlayerNames:
      return { kind: t, names: ce(() => ({ id: S(), username: Q() })) };
      case l.RollResponse:
        const rollResponse = {
          kind: t,
          recipeKind: us(),
          rolledAura: Oe(),
          replaceAura: Z(Oe),
          rollMs: Pe(),
          luck: S()
        };
        return rollResponse;
    case l.InventoryResponse:
      return {
        kind: t,
        auras: ce(Oe),
        equippedIndex: Z(S),
        inventorySize: Pe()
      };
    case l.UsernameResponse:
      return { kind: t, failedReason: Z(Q) };
    case l.CraftingResponse:
      return { kind: t, auras: ce(Oe) };
    case l.LobbyResponse:
      return {
        kind: t,
        lobbies: ce(() => ({
          lobbyId: S(),
          currentPlayers: S(),
          maxPlayers: S()
        }))
      };
    case l.ShopResponse:
      return {
        kind: t,
        money: Pe(),
        prices: ce(() => ({ item: xn(), price: Z(Pe) }))
      };
    case l.BuyResponse:
      return { kind: t, item: xn() };
    case l.ServerBroadcast:
      return { kind: t, message: Q() };
    case l.RestartIncoming:
    case l.LeaveResponse:
      return { kind: t };
    default:
      throw new Error(`Unknown packet kind: ${t}`);
  }
}
function S() {
  const e = ht.getUint8(ge);
  return (ge += 1), e;
}
function Pe() {
  const e = ht.getUint32(ge);
  return (ge += 4), e;
}
function Ue() {
  const e = ht.getFloat32(ge);
  return (ge += 4), e;
}
function ls() {
  return !!S();
}
const cs = Object.values(n);
function Oe() {
  const e = S();
  if (cs.includes(e)) return e;
  throw new Error("Expected valid aura kind");
}
const ds = Object.values(b);
function us() {
  const e = S();
  if (ds.includes(e)) return e;
  throw new Error("Expected valid recipe kind");
}
const ms = Object.values(I);
function xn() {
  const e = S();
  if (ms.includes(e)) return e;
  throw new Error("Expected valid shop item");
}
function ce(e) {
  const t = S(),
    o = new Array(t);
  for (let s = 0; s < t; s++) o[s] = e();
  return o;
}
function Z(e) {
  return ls() ? e() : null;
}
function Q() {
  const e = ce(S);
  return is.decode(new Uint8Array(e));
}
const l = {
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
  },
  me = { NoAccount: 1, GuestAccount: 2, DiscordCode: 3 },
  ps = "#20a660",
  fs = "#1c9254",
  gs = "#187e49",
  hs = 50,
  ys = "wss://servers.the-unban-network.online",
  bs = "w",
  vs = "x",
  Mt = { blackCircle: bs, blackCircleShow: vs },
  dt = document.createElement("div");
dt.className = Mt.blackCircle;
function Nn(e) {
  e
    ? dt.classList.add(Mt.blackCircleShow)
    : dt.classList.remove(Mt.blackCircleShow);
}
let $n = 0;
function Ot() {
  Nn(!0), ($n = performance.now());
}
function _t(e) {
  const t = 500 - (performance.now() - $n);
  setTimeout(() => {
    e(), Nn(!1);
  }, Math.max(t, 0));
}
const xs = "L",
  Ss = { leaderboard: xs },
  ut = document.createElement("div");
ut.className = Ss.leaderboard;
let Sn = -9999,
  wn = -9999,
  kn = -9999;
function ws(e) {
  const t = performance.now(),
    o = e.players.length,
    s = e.players.find((a) => a.id === G),
    i = s === void 0 ? -9999 : s.numRolls;
  (t - Sn < 2e3 && i === kn && o === wn) ||
    ((Sn = t),
    (kn = i),
    (wn = o),
    (ut.innerHTML = "<div><span>USERNAME</span><span>ROLLS</span></div>"),
    e.players.sort((a, c) => c.numRolls - a.numRolls),
    e.players.forEach((a) => {
      const c = document.createElement("div");
      (c.innerHTML =
        "<span>" + Et(a.id) + "</span><span>" + ks(a.numRolls) + "</span>"),
        a.id === G && (c.style.color = "#fff"),
        ut.appendChild(c);
    }));
}
function ks(e) {
  if (e < 1e3) return e + "";
  if (e < 1e6) {
    const s = Math.floor(e / 1e3),
      i = Math.floor((e % 1e3) / 100);
    return s + "." + i + "K";
  }
  const t = Math.floor(e / 1e6),
    o = Math.floor((e % 1e6) / 1e5);
  return t + "." + o + "M";
}
const P = new Pt();
function An(e, t) {
  const { innerWidth: o, innerHeight: s, devicePixelRatio: i } = window,
    a = Math.max(o / 1728, s / 992);
  P.makeScale(i), P.translate(o / 2, s / 2), P.scale(a), P.translate(-e, -t);
}
const rt = new Pt();
class Fn {
  constructor(t) {
    R(this, "options");
    R(this, "particles");
    R(this, "accumulator");
    (this.options = t), (this.particles = []), (this.accumulator = 0);
  }
  update(t) {
    if (t.deltaTime > 0.05) return;
    const o = this.options;
    this.accumulator += t.deltaTime;
    const s = 1 / o.rate;
    for (; this.accumulator >= s; )
      o.emitFunc(this.particles, t), (this.accumulator -= s);
    let i = 0;
    for (const a of this.particles)
      (a.timeAlive += t.deltaTime),
        !(a.timeAlive >= o.lifetime) &&
          (o.moveFunc(a, t), (this.particles[i++] = a));
    this.particles.length = i;
  }
  render(t, o) {
    const s = this.options;
    for (const i of s.repeatAngles) {
      rt.copy(P),
        rt.translate(o.playerX, o.playerY),
        rt.rotate(i + s.angleFunc(o)),
        t.setTransform(rt);
      for (const a of this.particles) {
        const c = a.timeAlive / s.lifetime,
          p = s.colorFunc(c, a),
          w = s.sizeFunc(c, a);
        t.beginPath(),
          t.arc(a.x, a.y, w, 0, B),
          s.shape === 1
            ? ((t.fillStyle = p), t.fill())
            : ((t.strokeStyle = p), (t.lineWidth = w * 0.15), t.stroke());
      }
    }
  }
}
const As = "I",
  Es = "J",
  Rs = "K",
  Wt = { chat: As, messages: Es, messageInput: Rs },
  Ls = "sa",
  Cs = "ta",
  qn = { topButtons: Ls, chatAlert: Cs },
  _s = "ua",
  Ts = "va",
  Pn = { settings: _s, settingsRow: Ts },
  z = document.createElement("div");
z.className = Pn.settings;
z.style.display = "none";
function Is() {
  z.style.display === "none"
    ? (M.style.display !== "none" && (M.style.display = "none"),
      (z.style.display = ""))
    : (z.style.display = "none");
}
let mt = localStorage.getItem("lowgraphics") !== null;
const Gt = document.createElement("div"),
  Un = document.createElement("span"),
  Ye = document.createElement("input");
Gt.className = Pn.settingsRow;
Gt.append(Un, Ye);
Un.textContent = "Low graphics mode:";
Ye.checked = mt;
Ye.type = "checkbox";
Ye.addEventListener("change", () => {
  (mt = Ye.checked),
    mt
      ? localStorage.setItem("lowgraphics", "yes")
      : localStorage.removeItem("lowgraphics");
});
z.append(Gt);
const Je = document.createElement("div");
Je.className = qn.topButtons;
const Bs = X({
    parentDiv: Je,
    tooltipText: "Leave Game",
    position: "bottomLeft",
    kind: "icon",
    iconUrl: "url(/icons/leave.svg)"
  }),
  Ms = X({
    parentDiv: Je,
    tooltipText: "Settings",
    position: "bottomCenter",
    kind: "icon",
    iconUrl: "url(/icons/settings.svg)"
  }),
  On = X({
    parentDiv: Je,
    tooltipText: "Chat",
    position: "bottomCenter",
    kind: "icon",
    iconUrl: "url(/icons/chat.svg)"
  }),
  Ze = document.createElement("div");
Ze.className = qn.chatAlert;
Ze.style.display = "none";
On.append(Ze);
function Ds() {
  Ze.style.display = "";
}
function Wn() {
  Ze.style.display = "none";
}
Bs.addEventListener("click", () => {
  Ot(), f({ kind: l.LeaveRequest });
});
Ms.addEventListener("click", () => {
  Is();
});
On.addEventListener("click", () => {
  Ns();
});
const M = document.createElement("div");
M.className = Wt.chat;
M.style.display = "none";
function Ns() {
  M.style.display === "none"
    ? (z.style.display !== "none" && (z.style.display = "none"),
      Wn(),
      (M.style.display = ""))
    : (M.style.display = "none");
}
const ee = document.createElement("div");
ee.className = Wt.messages;
const Kt = document.createElement("form"),
  D = document.createElement("input");
D.className = Wt.messageInput;
D.placeholder = "Sign in on the main menu to chat";
D.disabled = !0;
function $s() {
  (D.placeholder = "To chat click here or press / key"), (D.disabled = !1);
}
function Fs() {
  ee.replaceChildren();
}
Kt.append(D);
M.append(ee, Kt);
Kt.addEventListener("submit", (e) => {
  e.preventDefault();
  const t = D.value.trim();
  t.length >= 1 &&
    t.length <= Jo &&
    (f({ kind: l.Chat, message: t }), (D.value = ""), D.blur());
});
function Gn(e) {
  for (
    ee.append(e),
      ee.scrollTop = ee.scrollHeight,
      M.style.display === "none" && Ds();
    ee.children.length > 30;

  )
    ee.children[0].remove();
}
function qs(e) {
  for (const t of e.players) {
    if (t.chatMessage === null) continue;
    const o = document.createElement("div"),
      s = document.createElement("span");
    (s.textContent = Et(t.id) + ": "),
      (s.style.fontWeight = "700"),
      o.append(s, t.chatMessage),
      Gn(o);
  }
}
function Ps(e) {
  const t = document.createElement("div");
  (t.style.fontWeight = "700"),
    (t.style.color = "yellow"),
    (t.textContent = e.message),
    Gn(t);
}
function Us() {
  Wn(), (M.style.display = ""), D.focus();
}
const Os = "qa",
  Ws = "ra",
  Re = { backdrop: Os, backdropShow: Ws },
  Qe = document.createElement("div");
Qe.className = Re.backdrop;
const yt = document.createElement("div");
yt.className = Re.backdrop;
function Gs() {
  Qe.classList.add(Re.backdropShow), yt.classList.add(Re.backdropShow);
}
function Ks() {
  Qe.classList.remove(Re.backdropShow), yt.classList.remove(Re.backdropShow);
}
const Hs = "M",
  Ys = "N",
  zs = "O",
  js = "P",
  Xs = "Q",
  ze = {
    inventoryBody: Hs,
    noAurasText: Ys,
    equipped: zs,
    discardModal: js,
    discardWarning: Xs
  },
  ie = document.createElement("div"),
  Ht = document.createElement("div"),
  pt = document.createElement("div"),
  Yt = document.createElement("div");
ie.append(Ht, pt, Yt);
ie.className = r.modal;
Ht.className = r.modalHeader;
pt.className = ze.inventoryBody;
Yt.className = r.modalFooter;
const zt = document.createElement("span"),
  jt = document.createElement("button");
Ht.append(zt, jt);
zt.textContent = "Inventory (0/6)";
jt.classList.add(r.button, r.buttonRed, r.buttonClose);
const _ = document.createElement("button"),
  T = document.createElement("button");
Yt.append(_, T);
_.textContent = "Equip";
T.textContent = "Sell";
_.classList.add(r.button, r.buttonGreen);
T.classList.add(r.button, r.buttonRed);
_.disabled = !0;
T.disabled = !0;
const Ie = document.createElement("div"),
  Xt = document.createElement("span"),
  Vt = document.createElement("div"),
  Le = document.createElement("button"),
  bt = document.createElement("button");
Le.textContent = "Sell";
bt.textContent = "Cancel";
Ie.append(Xt, Vt);
Vt.append(Le, bt);
Ie.classList.add(r.modal, ze.discardModal);
Xt.className = ze.discardWarning;
Vt.className = r.modalActions;
Le.classList.add(r.button, r.buttonRed);
bt.classList.add(r.button, r.buttonGray);
let q = null,
  Ge = [],
  v = null;
function Vs() {
  (v = null), f({ kind: l.InventoryRequest });
}
function En() {
  for (let e = 0; e < Ge.length; e++)
    e === v
      ? Ge[e].classList.add(r.selected)
      : Ge[e].classList.remove(r.selected);
  if (
    (v === null
      ? ((_.disabled = !0),
        (T.disabled = !0),
        _.classList.add(r.buttonDisabled),
        T.classList.add(r.buttonDisabled))
      : ((_.disabled = !1),
        (T.disabled = !1),
        _.classList.remove(r.buttonDisabled),
        T.classList.remove(r.buttonDisabled)),
    v !== null && v === (q == null ? void 0 : q.equippedIndex)
      ? (_.innerText = "Unequip")
      : (_.innerText = "Equip"),
    v !== null && q)
  ) {
    const e = q.auras[v],
      t = "Sell ($" + gt(Bn[e]) + ")";
    (T.textContent = t), (Le.textContent = t);
  } else v === null && ((T.textContent = "Sell"), (Le.textContent = "Sell"));
}
jt.addEventListener("click", () => {
  y(null), (v = null);
});
_.addEventListener("click", () => {
  v === null || q === null || f({ kind: l.InventoryEquip, index: v });
});
T.addEventListener("click", () => {
  if (v === null || q === null) return;
  const e = Bt[q.auras[v]];
  (Xt.innerHTML = `<strong>WARNING</strong><br>Sell your <i>${e}</i> aura?<br>This action cannot be undone.`),
    y(Ie);
});
Le.addEventListener("click", () => {
  v === null ||
    q === null ||
    (f({ kind: l.InventoryDiscard, index: v }), (v = null));
});
bt.addEventListener("click", () => {
  y(ie);
});
function Js(e) {
  if (
    ((q = e),
    (zt.textContent = `Inventory (${e.auras.length}/${e.inventorySize})`),
    (Ge = e.auras.map((t, o) => {
      const s = document.createElement("button");
      s.classList.add(r.button, r.buttonGray, r.auraBox),
        o === e.equippedIndex && s.classList.add(ze.equipped);
      const i = "url(/titles/" + t + ".svg)";
      return (
        (s.style.backgroundImage = i),
        s.addEventListener("click", () => {
          (v = o === v ? null : o), En();
        }),
        s
      );
    })),
    pt.replaceChildren(...Ge),
    e.auras.length === 0)
  ) {
    const t = document.createElement("div");
    (t.innerText = "You don't have any auras yet."),
      (t.className = ze.noAurasText),
      pt.append(t);
  }
  En(), y(ie);
}
const Zs = "aa",
  Qs = "ba",
  ea = "ca",
  ta = "da",
  na = "ea",
  oa = "fa",
  sa = "ga",
  aa = "ha",
  ia = "ia",
  ra = "ja",
  la = "ka",
  ca = "la",
  da = "ma",
  ua = "na",
  ma = "oa",
  pa = "pa",
  g = {
    bottomButtons: Zs,
    rollButton: Qs,
    autoButton: ea,
    fastButton: ta,
    rollModal: na,
    rollBoxes: oa,
    rollBox: sa,
    whiteBar: aa,
    resultModal: ia,
    resultAuraBox: ra,
    replaceModal: la,
    replaceWarning: ca,
    mysteryBox: da,
    timerText: ua,
    rollDisabled: ma,
    luckText: pa
  },
  fa = "W",
  ga = "X",
  Kn = { shopBody: fa, shopItem: ga },
  Be = document.createElement("div"),
  Jt = document.createElement("div"),
  ft = document.createElement("div");
Be.append(Jt, ft);
Be.className = r.modal;
Jt.className = r.modalHeader;
ft.className = Kn.shopBody;
const Zt = document.createElement("span"),
  Qt = document.createElement("button");
Jt.append(Zt, Qt);
Zt.textContent = "Shop";
Qt.classList.add(r.button, r.buttonRed, r.buttonClose);
Qt.addEventListener("click", () => {
  y(null);
});
const ha = {
  [I.InventorySlot]:
    "Increases how many auras you can store by one. After each purchase the price goes up by one thousand.",
  [I.FastRoll]:
    "Increases the speed of every roll. After each purchase the time to roll decreases by one second.",
  [I.AutoRoll]:
    "Continuously rolls for you, keeping auras if you have space or replacing worse auras if you have no space.",
  [I.LuckBoost]:
    "Permanently increases luck for every roll (including crafting recipes). Each purchase increases your luck by 1%."
};
function ya(e) {
  (Zt.textContent = "Shop (You have $" + gt(e.money) + ")"),
    ft.replaceChildren();
  for (const { item: t, price: o } of e.prices) {
    const s = document.createElement("div"),
      i = document.createElement("button"),
      a = document.createElement("span");
    (a.textContent = ha[t]), (s.className = Kn.shopItem), s.append(i, a);
    const c = ts[t];
    o === null
      ? (i.textContent = c + " (Already Bought)")
      : (i.textContent = c + " ($" + gt(o) + ")"),
      o === null || o > e.money
        ? (i.classList.add(r.button, r.buttonDisabled), (i.disabled = !0))
        : (i.classList.add(r.button, r.buttonGreen),
          i.addEventListener("click", () => {
            f({ kind: l.BuyRequest, item: t });
          })),
      ft.append(s);
  }
  y(Be);
}
function ba(e) {
  y(null), e.item === I.AutoRoll ? La() : e.item === I.FastRoll && Ca();
}
const va = "R",
  xa = "S",
  Sa = "T",
  wa = "U",
  ka = "V",
  et = {
    craftingBody: va,
    recipeList: xa,
    requiredAuras: Sa,
    recipeDescription: wa,
    redeemButton: ka
  },
  Me = document.createElement("div"),
  en = document.createElement("div"),
  tn = document.createElement("div"),
  nn = document.createElement("div");
Me.append(en, tn, nn);
Me.className = r.modal;
en.className = r.modalHeader;
tn.className = et.craftingBody;
nn.className = r.modalFooter;
const Hn = document.createElement("span"),
  on = document.createElement("button");
en.append(Hn, on);
Hn.textContent = "Crafting";
on.classList.add(r.button, r.buttonRed, r.buttonClose);
const sn = document.createElement("div"),
  an = document.createElement("div");
tn.append(sn, an);
sn.className = et.recipeList;
an.className = et.requiredAuras;
const rn = document.createElement("span"),
  H = document.createElement("button");
nn.append(rn, H);
H.textContent = "Redeem";
rn.classList.add(et.recipeDescription);
H.classList.add(r.button, r.buttonGreen, et.redeemButton);
H.disabled = !0;
on.addEventListener("click", () => {
  y(null);
});
const Ce = [];
let Dt = null,
  Yn = 0;
function Aa(e) {
  for (let t = 0; t < Ce.length; t++) {
    const o = Ce[t];
    t === e ? o.classList.add(r.selected) : o.classList.remove(r.selected);
  }
}
function Ea(e) {
  if (Dt === null) {
    y(null);
    return;
  }
  let t = !0;
  const o = [];
  for (const [s, i] of e.requiredAuras) {
    const a = document.createElement("div"),
      c = document.createElement("div"),
      p = document.createElement("span");
    a.append(c, p),
      c.classList.add(r.auraBox),
      (c.style.backgroundImage = "url(/titles/" + s + ".svg)");
    const w = os(Dt.auras, s);
    (p.textContent = `(${w}/${i})`),
      w < i
        ? ((t = !1), (p.style.color = "#f44336"))
        : (p.style.color = "#4caf50"),
      o.push(a);
  }
  an.replaceChildren(...o),
    t
      ? ((H.disabled = !1), H.classList.remove(r.buttonDisabled))
      : ((H.disabled = !0), H.classList.add(r.buttonDisabled));
}
for (const e of Object.values(b)) {
  if (e === b.NoRecipe) continue;
  const t = qt[e],
    o = document.createElement("button");
  (o.textContent = t.name), o.classList.add(r.button, r.buttonGray), Ce.push(o);
  const s = Ce.length - 1;
  o.addEventListener("click", () => {
    (rn.textContent = t.description),
      Aa(s),
      (Yn = s),
      Ea(t),
      (H.onclick = () => {
        f({ kind: l.RollRequest, recipeKind: e, fast: Se });
      });
  });
}
sn.append(...Ce);
function Ra(e) {
  (Dt = e), Ce[Yn].click(), y(Me);
}
const vt = document.createElement("div"),
  U = document.createElement("button"),
  N = document.createElement("button"),
  $ = document.createElement("button");
vt.className = g.bottomButtons;
vt.append(N, U, $);
U.classList.add(r.button, g.rollButton);
N.classList.add(r.button, g.autoButton, g.rollDisabled);
$.classList.add(r.button, g.fastButton, g.rollDisabled);
U.textContent = "Roll";
N.textContent = "Auto: OFF";
$.textContent = "Fast: OFF";
N.disabled = !0;
$.disabled = !0;
let Y = !1,
  Se = !1;
U.addEventListener("click", () => {
  f({ kind: l.RollRequest, recipeKind: b.NoRecipe, fast: Se });
});
let Ke = null,
  lt = null;
async function zn() {
  try {
    lt = await navigator.wakeLock.request("screen");
  } catch {}
}
async function jn() {
  lt !== null && (await lt.release(), (lt = null));
}
document.addEventListener("visibilitychange", () => {
  Y && document.visibilityState === "visible" && zn();
});
N.addEventListener("click", () => {
  (Y = !Y),
    (N.textContent = "Auto: " + (Y ? "ON" : "OFF")),
    Ke !== null && clearInterval(Ke),
    Y ? (zn(), U.click(), (Ke = setInterval(() => U.click(), 100))) : jn();
});
$.addEventListener("click", () => {
  (Se = !Se), ($.textContent = "Fast: " + (Se ? "ON" : "OFF"));
});
function La() {
  N.classList.remove(g.rollDisabled), (N.disabled = !1);
}
function Ca() {
  $.classList.remove(g.rollDisabled), ($.disabled = !1);
}
function Rn() {
  (Y = !1),
    (Se = !1),
    (N.textContent = "Auto: OFF"),
    ($.textContent = "Fast: OFF"),
    Ke !== null && clearInterval(Ke),
    jn(),
    $.classList.add(g.rollDisabled),
    ($.disabled = !0),
    N.classList.add(g.rollDisabled),
    (N.disabled = !0);
}
const De = document.createElement("div"),
  xt = document.createElement("div"),
  Xn = document.createElement("div"),
  je = [];
for (let e = 0; e < 20; e++)
  je.push(document.createElement("div")),
    je[e].classList.add(r.auraBox, g.rollBox);
De.append(xt, Xn);
xt.append(...je);
De.classList.add(r.modal, g.rollModal);
xt.className = g.rollBoxes;
Xn.className = g.whiteBar;
const we = document.createElement("div");
we.style.opacity = "0";
we.className = g.luckText;
const Ne = document.createElement("div"),
  ln = document.createElement("span"),
  cn = document.createElement("div"),
  St = document.createElement("button"),
  wt = document.createElement("button");
St.textContent = "Replace";
wt.textContent = "Cancel";
Ne.append(ln, cn);
cn.append(St, wt);
Ne.classList.add(r.modal, g.replaceModal);
ln.className = g.replaceWarning;
cn.className = r.modalActions;
St.classList.add(r.button, r.buttonRed);
wt.classList.add(r.button, r.buttonGray);
const se = document.createElement("div"),
  dn = document.createElement("div"),
  un = document.createElement("div"),
  kt = document.createElement("button"),
  tt = document.createElement("button");
kt.textContent = "Keep";
tt.textContent = "Sell";
se.append(dn, un);
un.append(kt, tt);
se.classList.add(r.modal, g.resultModal);
dn.classList.add(r.auraBox, g.resultAuraBox);
un.className = r.modalActions;
kt.classList.add(r.button, r.buttonGreen);
tt.classList.add(r.button, r.buttonRed);
let Nt = null;
tt.addEventListener("click", () => {
  f({ kind: l.RollKeep, isKeeping: !1 }), y(null);
});
St.addEventListener("click", () => {
  f({ kind: l.RollKeep, isKeeping: !0 }), y(null);
});
wt.addEventListener("click", () => {
  y(se);
});
kt.addEventListener("click", () => {
  Nt &&
    (Nt.replaceAura === null
      ? (f({ kind: l.RollKeep, isKeeping: !0 }), y(null))
      : y(Ne));
});
const he = document.createElement("span"),
  pe = document.createElement("span");
he.className = g.timerText;
pe.className = g.timerText;
he.style.bottom = "80px";
pe.style.bottom = "110px";
he.style.opacity = "0";
pe.style.opacity = "0";
vt.append(pe, he);
let $t = 0,
  Vn = 0;
function Jn() {
  const e = Date.now() - Vn;
  e > $t
    ? (he.style.opacity = "0")
    : ((he.textContent = (($t - e) / 1e3).toFixed(1)), setTimeout(Jn, 100));
}
async function _a(e) {
  (Nt = e),
    U.classList.add(g.rollDisabled),
    (U.disabled = !0),
    ($t = e.rollMs),
    (Vn = Date.now()),
    (he.style.opacity = "1"),
    Jn(),
    e.luck > 0 &&
      !Y &&
      ((we.textContent = e.luck + "% Luck Boost"), (we.style.opacity = "1"));
  for (let s = 0; s < je.length; s++) {
    const i = je[s];
    let a;
    if (s === 17) a = e.rolledAura;
    else {
      const p = Math.floor(Math.random() * 1e8);
      a = es(p, e.recipeKind);
    }
    const c = "url(/titles/" + a + ".svg)";
    a <= 7
      ? ((i.style.backgroundImage = c), i.classList.remove(g.mysteryBox))
      : ((i.style.backgroundImage = "url(/Mystery.svg)"),
        i.classList.add(g.mysteryBox)),
      s === 17 &&
        ((dn.style.backgroundImage = c),
        (tt.textContent = "Sell ($" + gt(Bn[a]) + ")"));
  }
  if (e.replaceAura !== null) {
    const s = Bt[e.replaceAura];
    ln.innerHTML = `<strong>WARNING</strong><br>Your inventory is full. Do you want to<br>replace your <i>${s}</i> aura?`;
  }
  (!Y || e.recipeKind !== b.NoRecipe) && y(De);
  let t = ne(30, 80);
  Math.random() < 0.5 && (t *= -1);
  const o = `${-3930 + t}px`;
  if (
    (await xt.animate(
      [
        { translate: "0px", easing: "cubic-bezier(.15,.7,.5,1)" },
        { translate: o, offset: 0.85 },
        { translate: o, offset: 0.9, easing: "cubic-bezier(.3,.1,.5,1.5)" },
        { translate: "-3930px", offset: 0.95 },
        { translate: "-3930px" }
      ],
      { duration: e.rollMs, fill: "forwards" }
    ).finished,
    U.classList.remove(g.rollDisabled),
    (U.disabled = !1),
    e.rolledAura >= n.Firefly && f({ kind: l.RareAuraRevealed }),
    (we.style.opacity = "0"),
    Y && e.recipeKind === b.NoRecipe)
  ) {
    const s = e.replaceAura === null || e.rolledAura > e.replaceAura;
    f({ kind: l.RollKeep, isKeeping: s }),
      (pe.textContent = (s ? "Kept " : "Sold ") + Bt[e.rolledAura]),
      (pe.style.opacity = "1"),
      setTimeout(() => {
        pe.style.opacity = "0";
      }, 1200);
    const i = so();
    i === Be
      ? f({ kind: l.ShopRequest })
      : i === Me
      ? f({ kind: l.CraftingRequest })
      : i === ie && f({ kind: l.InventoryRequest });
  } else K && y(se);
}
const Ta = "Y",
  Ia = "Z",
  Zn = { usernameBody: Ta, errorText: Ia },
  $e = document.createElement("div"),
  mn = document.createElement("div"),
  pn = document.createElement("div"),
  fn = document.createElement("div");
$e.append(mn, pn, fn);
$e.className = r.modal;
mn.className = r.modalHeader;
pn.className = Zn.usernameBody;
fn.className = r.modalFooter;
const Qn = document.createElement("span");
mn.append(Qn);
Qn.textContent = "Choose your username";
const eo = document.createElement("span");
eo.textContent = "Once you submit, you'll not be able to change it later!";
const to = document.createElement("span");
to.innerHTML =
  "- Can only contain letters and numbers<br>- Must be between 4 and 15 characters long<br>- No inappropriate or offensive language";
const no = document.createElement("input"),
  _e = document.createElement("div");
_e.className = Zn.errorText;
_e.style.display = "none";
pn.append(eo, to, no, _e);
const At = document.createElement("button");
At.textContent = "Submit";
At.classList.add(r.button, r.buttonGreen);
fn.append(At);
At.addEventListener("click", () => {
  f({ kind: l.UsernameRequest, username: no.value.trim() });
});
function Ba() {
  (_e.style.display = "none"), y($e);
}
function Ma(e) {
  e.failedReason !== null
    ? ((_e.textContent = e.failedReason), (_e.style.display = ""))
    : y(null);
}
const oo = [ie, Ie, Me, Be, De, se, Ne, $e];
function so() {
  return oo.find((e) => e.classList.contains(r.modalShow));
}
function y(e) {
  for (const t of oo)
    t === e ? t.classList.add(r.modalShow) : t.classList.remove(r.modalShow);
  e ? Gs() : Ks();
}
function ao() {
  const e = so();
  e === Ne
    ? y(se)
    : e === Ie
    ? y(ie)
    : e !== De && e !== se && e !== $e && y(null);
}
Qe.addEventListener("click", ao);
const C = new Set(),
  ae = { kind: l.Input, angle: 0, moveAngle: null };
let Tt = null;
function nt() {
  Tt === null &&
    (Tt = setTimeout(() => {
      f(ae), (Tt = null);
    }, 16));
}
function io() {
  let e = 0,
    t = 0;
  (C.has("KeyW") || C.has("ArrowUp")) && t--,
    (C.has("KeyS") || C.has("ArrowDown")) && t++,
    (C.has("KeyA") || C.has("ArrowLeft")) && e--,
    (C.has("KeyD") || C.has("ArrowRight")) && e++,
    e === 0 && t === 0
      ? (ae.moveAngle = null)
      : (ae.moveAngle = Math.atan2(t, e));
}
document.addEventListener("keydown", (e) => {
  if (!e.repeat && document.activeElement !== D) {
    if (e.code === "Slash") {
      e.preventDefault(), Us();
      return;
    }
    if (e.code === "Escape") {
      ao();
      return;
    }
    if (e.code === "Tab") {
      e.preventDefault();
      return;
    }
    C.add(e.code), io(), nt();
  }
});
document.addEventListener("keyup", (e) => {
  C.delete(e.code), io(), nt();
});
window.addEventListener("blur", () => {
  C.clear(), (ae.moveAngle = null), nt();
});
document.addEventListener("mousemove", (e) => {
  if (!K) return;
  const t = e.clientX - window.innerWidth / 2,
    o = e.clientY - window.innerHeight / 2;
  (ae.angle = Math.atan2(o, t)), nt();
});
function gn(e) {
  e !== null && (ae.angle = e), (ae.moveAngle = e), nt();
}
const ro = new Map();
for (const e of Object.values(n)) {
  const t = new Image();
  (t.src = "/titles/" + e + ".svg"), ro.set(e, t);
}
function Da(e) {
  const t = ro.get(e);
  if (t === void 0) throw new Error(`No title image for aura: ${e}`);
  return t;
}
const Ln = new Map();
function Na(e) {
  let t = Ln.get(e);
  return (
    t === void 0 &&
      ((t = "#" + (e >>> 0).toString(16).padStart(8, "0")), Ln.set(e, t)),
    t
  );
}
function $a(e, t, o) {
  const s = ue(e >>> 24, t >>> 24, o),
    i = ue((e >>> 16) & 255, (t >>> 16) & 255, o),
    a = ue((e >>> 8) & 255, (t >>> 8) & 255, o),
    c = ue(e & 255, t & 255, o);
  return (s << 24) | (i << 16) | (a << 8) | c;
}
function lo(e, t) {
  const o = e.length - 1,
    s = t * o,
    i = Math.floor(s),
    a = Math.min(i + 1, o);
  return Na($a(e[i], e[a], s - i));
}
function Fa(e, t) {
  const o = e.length - 1,
    s = t * o,
    i = Math.floor(s),
    a = Math.min(i + 1, o);
  return ue(e[i], e[a], s - i);
}
const x = (e) => ({
    shape: 1,
    repeatAngles: [0],
    angleFunc: () => 0,
    emitFunc: (t) => {
      const o = ne(e.emitDist[0], e.emitDist[1]),
        s = ne(0, B);
      let i;
      e.dir === 1
        ? (i = ne(0, B))
        : e.dir === 2
        ? (i = s)
        : e.dir === 3
        ? (i = s + h)
        : (i = s + h / 2);
      const a = ne(e.speed[0], e.speed[1]);
      t.push({
        timeAlive: 0,
        x: o * Math.cos(s),
        y: o * Math.sin(s),
        velX: a * Math.cos(i),
        velY: a * Math.sin(i)
      });
    },
    moveFunc: (t, o) => {
      (t.x += o.deltaTime * t.velX), (t.y += o.deltaTime * t.velY);
    }
  }),
  k = (e) => ({
    shape: 1,
    repeatAngles: [0],
    angleFunc: () => 0,
    emitFunc: (t) => {
      t.push({
        timeAlive: 0,
        x: e.shakeAmount * (Math.random() * 2 - 1),
        y: e.shakeAmount * (Math.random() * 2 - 1),
        velX: 0,
        velY: 0
      });
    },
    moveFunc: (t, o) => {
      t.x += o.deltaTime * e.speed;
    }
  }),
  A = (e) => ({
    shape: 1,
    angleFunc: () => 0,
    emitFunc: (t, o) => {
      const s =
        e.wiggleAmplitude * (Math.sin(o.currentTime * e.wiggleSpeed) + 0.5);
      t.push({
        timeAlive: 0,
        x: 0,
        y: 0,
        velX: e.speed * Math.cos(s),
        velY: e.speed * Math.sin(s)
      });
    },
    moveFunc: (t, o) => {
      (t.x += o.deltaTime * t.velX), (t.y += o.deltaTime * t.velY);
    }
  }),
  E = () => ({ angleFunc: (e) => e.playerAngle }),
  be = (e) => ({ angleFunc: (t) => e * t.currentTime }),
  ve = (e) => ({ colorFunc: () => e }),
  co = (e) => ({ sizeFunc: () => e }),
  m = (e) => ({ colorFunc: (t) => lo(e, t) }),
  u = (e) => ({ sizeFunc: (t) => Fa(e, t) }),
  Fe = (e) => {
    const t = B / e.count,
      o = [];
    for (let s = 0; s < e.count; s++) o.push(e.startAngle + s * t);
    return { repeatAngles: o };
  },
  Xe = {
    ...x({ emitDist: [35, 40], speed: [20, 20], dir: 1 }),
    ...m([4294967040, 4294967295, 4294967295, 4294967040]),
    ...u([2, 4]),
    rate: 4,
    lifetime: 1.5
  },
  qa = {
    ...Xe,
    ...m([3084806144, 3084806399, 3084806399, 3084806144]),
    rate: 6
  },
  Pa = {
    ...Xe,
    ...m([2210659072, 2210659327, 2210659327, 2210659072]),
    rate: 8
  },
  Ua = {
    ...Xe,
    ...m([3934644224, 3934644479, 3934644479, 3934644224]),
    rate: 10
  },
  Oa = {
    ...x({ emitDist: [40, 50], speed: [90, 150], dir: 1 }),
    ...m([4258224383, 4288282879, 2148076031, 4294967040]),
    ...u([1, 4, 2, 1]),
    rate: 20,
    lifetime: 0.35
  },
  Wa = {
    ...k({ speed: 0, shakeAmount: 0 }),
    ...m([223956991, 499100160]),
    ...u([30, 90]),
    rate: 1.5,
    lifetime: 3,
    shape: 2
  },
  Ga = {
    ...k({ speed: 70, shakeAmount: 0 }),
    ...u([30, 0]),
    ...Fe({ startAngle: -0.5 * h, count: 5 }),
    ...be(1),
    ...m([4292346111, 4292345856]),
    rate: 12,
    lifetime: 1
  },
  Ka = {
    ...k({ speed: 100, shakeAmount: 3 }),
    ...m([3469659776, 2206501360]),
    ...u([0, 6, 20, 25]),
    ...E(),
    rate: 10,
    lifetime: 1,
    repeatAngles: [-0.5 * h, 0.5 * h]
  },
  We = {
    ...x({ emitDist: [30, 30], speed: [40, 70], dir: 2 }),
    ...u([6, 4, 6, 0]),
    rate: 5,
    lifetime: 1
  },
  Ha = [
    { ...We, ...ve("#ff718d") },
    { ...We, ...ve("#fdff6a") },
    { ...We, ...ve("#78ff44") },
    { ...We, ...ve("#29cdff") },
    { ...We, ...ve("#a864fd") }
  ],
  ot = {
    ...k({ speed: 0, shakeAmount: 2 }),
    ...m([219560704, 590442112, 219560704]),
    ...u([60, 110]),
    rate: 5,
    lifetime: 2
  },
  Ya = {
    ...x({ emitDist: [35, 75], speed: [5, 15], dir: 1 }),
    ...m([
      4090768128, 4090768383, 4090768128, 4090768383, 4090768128, 4090768383,
      4090768128, 4090768383, 4090768128, 4090768383, 4090768128
    ]),
    ...u([2, 4]),
    rate: 4,
    lifetime: 3
  },
  za = {
    ...x({ emitDist: [40, 50], speed: [5, 7], dir: 1 }),
    ...m([574236415, 1908490239, 4110368640, 4110368512]),
    ...u([0, 50]),
    rate: 12,
    lifetime: 3
  },
  ja = {
    ...x({ emitDist: [15, 20], speed: [40, 90], dir: 1 }),
    ...m([4293211648, 4288746239, 4282385919, 0]),
    ...u([20, 30, 0]),
    rate: 40,
    lifetime: 1.5
  },
  Xa = { ...ot, ...m([375903488, 375903616, 1504767488]) },
  Va = {
    ...A({ wiggleAmplitude: 0.25, wiggleSpeed: 1, speed: 35 }),
    ...m([3917501439, 3917501439, 3745260031, 3745259776]),
    ...u([30, 10]),
    ...Fe({ startAngle: -0.5 * h, count: 5 }),
    rate: 6,
    lifetime: 3
  },
  uo = {
    ...k({ speed: 0, shakeAmount: 6 }),
    ...m([
      3728357888, 3728358143, 3738188543, 987644671, 987160319, 979623679,
      3728395263, 3728357888
    ]),
    ...u([30, 100]),
    rate: 20,
    lifetime: 2
  },
  Ja = {
    colorFunc: uo.colorFunc,
    ...x({ emitDist: [30, 100], speed: [60, 80], dir: 4 }),
    ...u([2, 4]),
    rate: 30,
    lifetime: 1
  },
  Za = {
    ...x({ emitDist: [10, 30], speed: [20, 80], dir: 4 }),
    ...m([1162232320, 2409345008, 1485616624, 3319194880]),
    ...u([20, 70]),
    rate: 50,
    lifetime: 1,
    shape: 2
  },
  Qa = {
    ...x({ emitDist: [120, 130], speed: [120, 120], dir: 3 }),
    ...m([4294967040, 4294967295]),
    ...u([6, 0]),
    rate: 16,
    lifetime: 1
  },
  ei = {
    ...k({ speed: 65, shakeAmount: 0 }),
    ...m([4258989311, 4109760511, 3986471679, 3612844799]),
    ...u([7, 26, 32, 21, 0]),
    ...Fe({ startAngle: 0, count: 8 }),
    ...be(0.2),
    rate: 16,
    lifetime: 2
  },
  ti = {
    ...x({ emitDist: [60, 150], speed: [10, 10], dir: 1 }),
    ...m([4294967040, 4294967200, 4294967040]),
    ...u([2, 4]),
    rate: 8,
    lifetime: 1.5
  },
  ni = {
    ...k({ speed: 0, shakeAmount: 2 }),
    ...m([4227454016, 4139732032, 1719630336]),
    ...u([35, 120]),
    rate: 12,
    lifetime: 2
  },
  ke = {
    ...m([4293835263, 4294967295, 4294967295, 4294967040]),
    rate: 20,
    lifetime: 1
  },
  oi = [
    {
      ...ke,
      ...A({ wiggleAmplitude: 0.15, wiggleSpeed: 3, speed: 200 }),
      ...u([20, 40, 10]),
      ...E(),
      repeatAngles: [0.5 * h + 0.5]
    },
    {
      ...ke,
      ...A({ wiggleAmplitude: 0.15, wiggleSpeed: 3, speed: 180 }),
      ...u([10, 25, 8]),
      ...E(),
      repeatAngles: [0.5 * h + 0.3]
    },
    {
      ...ke,
      ...A({ wiggleAmplitude: 0.15, wiggleSpeed: 3, speed: 140 }),
      ...u([8, 12, 7]),
      ...E(),
      repeatAngles: [0.5 * h + 0.1]
    }
  ],
  si = [
    {
      ...ke,
      ...A({ wiggleAmplitude: -0.15, wiggleSpeed: 3, speed: 200 }),
      ...u([20, 40, 10]),
      ...E(),
      repeatAngles: [-0.5 * h - 0.5]
    },
    {
      ...ke,
      ...A({ wiggleAmplitude: -0.15, wiggleSpeed: 3, speed: 180 }),
      ...u([10, 25, 8]),
      ...E(),
      repeatAngles: [-0.5 * h - 0.3]
    },
    {
      ...ke,
      ...A({ wiggleAmplitude: -0.15, wiggleSpeed: 3, speed: 140 }),
      ...u([8, 12, 7]),
      ...E(),
      repeatAngles: [-0.5 * h - 0.1]
    }
  ],
  ai = {
    ...x({ emitDist: [40, 200], speed: [5, 10], dir: 1 }),
    ...m([4227453952, 4294967200, 4139732128, 4227453952]),
    ...u([2, 4]),
    rate: 6,
    lifetime: 3
  },
  ii = {
    ...ot,
    ...m([375903488, 375903616, 933294336]),
    ...u([100, 180]),
    rate: 16,
    lifetime: 2
  },
  ri = {
    ...x({ emitDist: [30, 50], speed: [20, 60], dir: 2 }),
    ...m([4294967040, 4294967136, 4294967136, 4294967040]),
    ...u([3, 6]),
    rate: 20,
    lifetime: 2,
    shape: 2
  },
  li = {
    ...k({ speed: 90, shakeAmount: 0 }),
    ...u([12, 12, 15, 9, 12, 12, 8, 12, 10, 0]),
    ...Fe({ startAngle: 0, count: 6 }),
    ...be(0.2),
    ...ve("#60331f"),
    rate: 16,
    lifetime: 2
  },
  mo = { ...ot, ...m([2100958976, 2100959231]), ...co(55), shape: 2 },
  ci = { ...mo, ...co(130) },
  di = {
    ...x({ emitDist: [15, 20], speed: [80, 130], dir: 1 }),
    ...m([4293211648, 4288746239, 4282385919, 0]),
    ...u([20, 30, 0]),
    rate: 150,
    lifetime: 2
  },
  ui = {
    ...k({ speed: 70, shakeAmount: 90 }),
    ...m([
      3728357888, 3728358143, 3738188543, 987644671, 987160319, 979623679,
      3728395263, 3728357888
    ]),
    ...u([0, 10, 20, 0]),
    ...Fe({ startAngle: 0, count: 5 }),
    ...be(2),
    rate: 14,
    lifetime: 2
  },
  mi = {
    ...ot,
    ...u([110, 190]),
    ...m([219560704, 590442080, 2032388192, 2032388096]),
    rate: 12
  },
  pi = {
    ...x({ emitDist: [40, 160], speed: [1, 3], dir: 1 }),
    ...m([4294967040, 4294967295, 4294967295, 4294967040]),
    ...u([0, 3, 2, 3, 1]),
    rate: 20,
    lifetime: 3
  },
  fi = {
    ...k({ speed: 0, shakeAmount: 2 }),
    ...m([2501581568, 64, 2501581568]),
    ...u([120, 200]),
    rate: 12,
    lifetime: 2
  },
  Ae = { ...m([1882667007, 2501581823, 0]), rate: 24, lifetime: 1 },
  gi = [
    {
      ...Ae,
      ...A({ wiggleAmplitude: 0.15, wiggleSpeed: 3, speed: 250 }),
      ...u([25, 45, 15]),
      ...E(),
      repeatAngles: [0.5 * h + 0.5]
    },
    {
      ...Ae,
      ...A({ wiggleAmplitude: 0.15, wiggleSpeed: 3, speed: 230 }),
      ...u([15, 30, 13]),
      ...E(),
      repeatAngles: [0.5 * h + 0.3]
    },
    {
      ...Ae,
      ...A({ wiggleAmplitude: 0.15, wiggleSpeed: 3, speed: 190 }),
      ...u([13, 17, 12]),
      ...E(),
      repeatAngles: [0.5 * h + 0.1]
    }
  ],
  hi = [
    {
      ...Ae,
      ...A({ wiggleAmplitude: -0.15, wiggleSpeed: 3, speed: 250 }),
      ...u([25, 45, 15]),
      ...E(),
      repeatAngles: [-0.5 * h - 0.5]
    },
    {
      ...Ae,
      ...A({ wiggleAmplitude: -0.15, wiggleSpeed: 3, speed: 230 }),
      ...u([15, 30, 13]),
      ...E(),
      repeatAngles: [-0.5 * h - 0.3]
    },
    {
      ...Ae,
      ...A({ wiggleAmplitude: -0.15, wiggleSpeed: 3, speed: 190 }),
      ...u([13, 17, 12]),
      ...E(),
      repeatAngles: [-0.5 * h - 0.1]
    }
  ],
  yi = {
    ...x({ emitDist: [100, 280], speed: [60, 80], dir: 4 }),
    ...m([2501581568, 1882666992, 2501581568]),
    ...u([2, 4]),
    rate: 10,
    lifetime: 1
  },
  bi = {
    ...k({ speed: 0, shakeAmount: 6 }),
    ...m([4110368512, 1908490144, 2236848288, 574236160]),
    ...u([100, 220]),
    rate: 20,
    lifetime: 2
  },
  po = {
    ...k({ speed: 0, shakeAmount: 0 }),
    ...m([859256832, 286331391, 859257087, 286331136]),
    ...u([35, 0]),
    rate: 20,
    lifetime: 2.5,
    moveFunc: (e) => {
      (e.x = 110 * Math.cos(e.timeAlive) - 110),
        (e.y = 150 * Math.sin(e.timeAlive) + 30);
    },
    repeatAngles: [0, (2 / 3) * h, (4 / 3) * h],
    ...be(0.3)
  },
  vi = {
    ...po,
    moveFunc: (e) => {
      (e.x = -(110 * Math.cos(e.timeAlive) - 110)),
        (e.y = 150 * Math.sin(e.timeAlive) + 30);
    }
  },
  xi = {
    ...x({ emitDist: [20, 30], speed: [80, 120], dir: 1 }),
    ...m([574236415, 2236848383, 4294901888, 4110368512]),
    ...u([3, 3, 3, 40]),
    rate: 8,
    lifetime: 3
  },
  Si = {
    ...k({ speed: 0, shakeAmount: 5 }),
    ...m([219560704, 590442144, 1782773504]),
    ...u([30, 200]),
    rate: 8,
    lifetime: 2
  },
  wi = {
    shape: 1,
    ...m([3319194880, 2409344912, 1485616528, 3319194880]),
    ...u([0, 60]),
    rate: 12,
    lifetime: 3,
    ...Fe({ startAngle: 0, count: 6 }),
    ...be(3),
    emitFunc: (e) => {
      e.push({
        timeAlive: 0,
        x: 0,
        y: 0,
        velX: Math.random() * 25,
        velY: Math.random() * 25
      });
    },
    moveFunc: (e) => {
      const t = 300 * (1 - e.timeAlive / 3);
      (e.x = t * Math.cos(e.timeAlive) + e.velX),
        (e.y = t * Math.sin(e.timeAlive) + e.velY);
    }
  },
  ki = {
    ...k({ speed: 0, shakeAmount: 30 }),
    ...m([1162232320, 2409344912, 1485616480, 3319194880]),
    ...u([30, 160]),
    rate: 6,
    lifetime: 2,
    shape: 2
  },
  Ai = {
    shape: 1,
    rate: 1.5,
    lifetime: 2,
    repeatAngles: [0],
    angleFunc: () => 0,
    emitFunc: (e) => {
      const t = ne(0, B),
        o = Math.cos(t),
        s = Math.sin(t);
      let i = 20,
        a = 0,
        c = Math.random() * 0.3 + 0.7;
      const p = () => {
        e.push({
          timeAlive: 0,
          x: i * o - a * s,
          y: a * o + i * s,
          velX: 0,
          velY: c
        }),
          (c *= 0.95);
      };
      for (let w = 0; w < 12; w++) p(), (i += 10);
      for (let w = 0; w < 2; w++) {
        for (let V = 0; V < 6; V++) p(), (i -= 3), (a -= 5);
        for (let V = 0; V < 12; V++) p(), (i += 7);
      }
    },
    sizeFunc: (e, t) => 20 * t.velY,
    colorFunc: (e, t) => {
      if (t.timeAlive > 0.2 && t.timeAlive < 0.25) return "rgba(0,0,0,0)";
      const o = [1782773632, 4292346111, 4292345856],
        s = 1 + t.velY,
        i = Math.min(e * s, 1);
      return lo(o, i);
    },
    moveFunc: () => {}
  },
  Ei = {
    [n.Common]: [Xe],
    [n.Uncommon]: [qa],
    [n.Rare]: [Pa],
    [n.Epic]: [Ua],
    [n.Spark]: [Oa],
    [n.Ripple]: [Wa],
    [n.Stellar]: [Ga],
    [n.Enraged]: [Ka],
    [n.Confetti]: Ha,
    [n.Firefly]: [ot, Ya],
    [n.Toxic]: [za],
    [n.Ignited]: [ja],
    [n.Starfish]: [Xa, Va],
    [n.Chromatic]: [uo, Ja],
    [n.Vortex]: [Za, Qa],
    [n.Lotus]: [ei, ti],
    [n.Angelic]: [ni, ...oi, ...si, ai],
    [n.Starboard]: [ii, ri, li, mo, ci],
    [n.Inferno]: [di],
    [n.Kaleidoscope]: [ui],
    [n.Astral]: [mi, pi],
    [n.Demonic]: [fi, ...gi, ...hi, yi],
    [n.Miasma]: [bi, po, vi, xi],
    [n.Tempest]: [Si, wi, ki, Ai],
    [n.Commmon]: [Xe]
  };
function Cn(e) {
  const t = [];
  if (e !== null) for (const o of Ei[e]) t.push(new Fn(o));
  return t;
}
const Ri = {
  ...x({ emitDist: [yn - 10, yn], speed: [0, 10], dir: 3 }),
  ...m([4257547263, 4209910015]),
  ...u([0, 4, 0]),
  ...be(0.4),
  rate: 100,
  lifetime: 1
};
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
      V = a.id === G ? ae.angle : ns(c.angle, a.angle, s),
      re = L.find((qe) => qe.id === a.id);
    if (re === void 0) {
      const qe = Cn(a.equippedAura);
      L.push({
        id: a.id,
        x: p,
        y: w,
        angle: V,
        emitters: qe,
        aura: a.equippedAura
      });
    } else
      (re.x = p),
        (re.y = w),
        (re.angle = V),
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
    a.aura === n.Enraged && ((c += ne(-2, 2)), (p += ne(-2, 2))),
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
    if (
      ((d.font = "bold 20px Inter Variable"),
      (d.textAlign = "center"),
      (d.strokeStyle = "black"),
      (d.lineWidth = 4),
      d.strokeText(c, 0, 65),
      (d.fillStyle = "white"),
      d.fillText(c, 0, 65),
      a.aura !== null)
    ) {
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



let isUpdatingMap = false;

window.updateMapFromGameState = function() {
    if (!isUpdatingMap) {
        isUpdatingMap = true;
        function update() {
            if (typeof de !== 'undefined' && de) {
                updateMap(de);
            } else {
                console.error('Game state (de) is not accessible');
            }
            requestAnimationFrame(update);
        }
        update();
    }
};


