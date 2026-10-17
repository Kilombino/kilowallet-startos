# Kilowallet for StartOS

StartOS 0.4 package of [Kilowallet server](https://github.com/Kilombino/kilowallet-server): the
Kilowallet wallet (Bitcoin BLAKE2b / XBT) on your own node, with a web app made for the phone.

Published in the Kilombino store: `https://registry.kilombino.com`.

## Build

The image needs the Ark engine binaries in `kilowallet-server/ark-bin/{amd64,arm64}/` (not in git):
build them with `kilowallet-server/scripts/build-ark.sh` first.

```
npm ci
BUILDX_BUILDER=startos make x86 arm
```

Depends on a BLAKE2b node: `knots-blake2b` (Bitcoin Knots BLAKE2b Companion) or `bitcoind` on the
BLAKE2b chain; the service checks the chain before starting (the `chain` oneshot asks
`getdeploymentinfo` whether BLAKE2b is active). The server checks again on its own, at start and
every minute: the raw header of the node's best block must be 164 bytes past block 961,640 (80 bytes
there means the SHA-256 chain). Until then the web page shows why and the API refuses everything but
lock; no watch-only wallet is created in the node.

## Ark

The ARK tab runs the Ark engine (`kilombino-arkd`, the app's Paperclip/bark wallet) as a child of the
Java server, on 127.0.0.1 inside the container, data in `/data/ark` (so in the `main` volume and in
backups). It gets the words after an unlock and keeps running until the service stops; after a
start it waits for the user to unlock. Chain source: the node's RPC with its cookie (`/mnt/node/.cookie`;
the engine is restarted when the cookie changes), which needs `txindex=1` on the node, or
mempool.kilombino.com's Esplora if the user picks it. Ark events reach StartOS notifications through
the same `/internal/events` endpoint as coinjoin.
