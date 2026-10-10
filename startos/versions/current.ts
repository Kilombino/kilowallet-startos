import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.0-beta1:0',
  releaseNotes: {
    en_US:
      'BETA. Coinjoin, as in the Kilowallet app: a new COINJOIN tab (opt-in) to open or join pools with one coin, in the same pools as the app and Kilojoin. Ask to close, accept or refuse, sign after your output, change and fee are checked, leave or end a pool; open pools reload every minute; hints for an exact coin and a way to prepare one. Coins in a round are kept out of sends and mixed coins are flagged. Pool events arrive as StartOS notifications, through your own Telegram bot if you set one, and as a sound in the browser. Optional: accept and sign on its own while unlocked. Native SegWit (bc1q) hot wallets only. A beta: try it with small amounts.',
    es_ES:
      'BETA. Coinjoin, como en la app Kilowallet: una pestaña COINJOIN nueva (opcional) para abrir pools o unirte con una moneda, en los mismos pools que la app y Kilojoin. Pide el cierre, acepta o rechaza, firma después de comprobar tu salida, tu cambio y la comisión, sal de un pool o ciérralo; los pools abiertos se recargan cada minuto; pistas para una moneda exacta y una forma de prepararla. Las monedas que están en una ronda quedan fuera de los envíos y las mezcladas se marcan. Los avisos de los pools llegan como notificaciones de StartOS, por tu propio bot de Telegram si lo configuras, y como un sonido en el navegador. Opcional: aceptar y firmar sola mientras está desbloqueada. Solo hot wallets SegWit nativas (bc1q). Es una beta: pruébala con cantidades pequeñas.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
