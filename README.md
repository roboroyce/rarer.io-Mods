# rarer.io-Mods
map - map.js

## Server (Node.js + WebSocket)

The `server/` directory contains a small Node.js WebSocket backend that serves the static site from the repo root and exposes a `/ws` endpoint that matches the binary protocol in `map.js`.

### Run locally

```bash
cd server
npm install
npm start
```

By default the server listens on `http://localhost:8080` and serves `index.html`, `map.js`, `css/`, `fonts/`, and `favicons/` from the repo root.

### Configure the WebSocket URL

The client now auto-detects the WebSocket URL. It will use:

1. `window.WS_URL` if set,
2. `?ws=ws://host:port/ws` query parameter, or
3. the same-origin `/ws` endpoint when served by the Node server.

Examples:

```bash
# Same-origin (default when running the Node server)
http://localhost:8080

# Override with a query parameter
http://localhost:8080/?ws=ws://localhost:8080/ws
```
