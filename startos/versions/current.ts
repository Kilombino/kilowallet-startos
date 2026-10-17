import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.4.3:0',
  releaseNotes: {
    en_US:
      'Kilowallet now checks on its own which chain the node follows, at start and every minute. The SHA-256 chain shares its history with BLAKE2b up to block 961,639, so a node on it would show the same coins as if they were XBT. If the node follows the SHA-256 chain, has stopped just before the BLAKE2b fork, or is still syncing below it, the page says so and Kilowallet creates, scans and sends nothing until it is on the BLAKE2b chain.',
    es_ES:
      'Kilowallet comprueba ahora por su cuenta qué cadena sigue el nodo, al arrancar y cada minuto. La cadena SHA-256 comparte su historia con BLAKE2b hasta el bloque 961.639, así que un nodo en ella enseñaría las mismas monedas como si fueran XBT. Si el nodo sigue la cadena SHA-256, se ha parado justo antes de la bifurcación BLAKE2b o aún sincroniza por debajo de ella, la página lo dice y Kilowallet no crea, no escanea ni envía nada hasta que esté en la cadena BLAKE2b.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
