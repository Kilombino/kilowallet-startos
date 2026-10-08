# Kilowallet for StartOS

StartOS 0.4 package of [Kilowallet server](https://github.com/Kilombino/kilowallet-server): the
Kilowallet wallet (Bitcoin BLAKE2b / XBT) on your own node, with a web app made for the phone.

Published in the Kilombino store: `https://registry.kilombino.com`.

## Build

```
npm ci
BUILDX_BUILDER=startos make x86 arm
```

Depends on a BLAKE2b node: `knots-blake2b` (Bitcoin Knots BLAKE2b Companion) or `bitcoind` on the
BLAKE2b chain; the service checks the chain before starting.
