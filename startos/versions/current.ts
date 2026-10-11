import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.0:0',
  releaseNotes: {
    en_US:
      'Coinjoin and Ark, as in the Kilowallet app, now out of beta. COINJOIN tab (opt-in): the same pools as the app and Kilojoin (relay.kilombino.com), now Kilojoin v2: tick several coins for a pool (up to what its creator allows) and open pools of several coins per person; before joining with change you are offered to make the perfect (exact) coin first, paid with the coins you tick; every coin that joins a pool you opened is checked against your node, script included; Taproot pools are listed (this hot wallet is native SegWit, so it joins native SegWit pools). Pool events as StartOS notifications and through your Telegram bot; optional accept-and-sign on its own when the round checks out. ARK tab (opt-in) through the Paperclip Ark server: receive to Ark, Lightning (invoice or BOLT12 offer) or an on-chain deposit, send to Ark, Lightning or a BTC address, renew, emergency exit; the Ark engine reads the chain from your node (txindex) and renews coins on its own once unlocked. Hot wallets only for coinjoin and Ark; try them with small amounts first.',
    es_ES:
      'Coinjoin y Ark, como en la app Kilowallet, ya fuera de beta. Pestaña COINJOIN (opcional): los mismos pools que la app y Kilojoin (relay.kilombino.com), ahora Kilojoin v2: marca varias monedas para un pool (hasta lo que permita su creador) y abre pools de varias monedas por persona; antes de entrar con cambio se te ofrece crear primero la moneda perfecta (exacta), pagada con las monedas que marques; cada moneda que entra en un pool que abres se comprueba contra tu nodo, script incluido; los pools Taproot se ven (este hot wallet es native SegWit, así que entra en los pools native SegWit). Avisos de los pools como notificaciones de StartOS y por tu bot de Telegram; opción de aceptar y firmar solo cuando la ronda cuadra. Pestaña ARK (opcional) con el servidor Ark de Paperclip: recibe en Ark, Lightning (factura u oferta BOLT12) o un depósito on-chain, envía a Ark, Lightning o a una dirección BTC, renueva, salida de emergencia; el motor Ark lee la cadena de tu nodo (txindex) y renueva las monedas solo una vez desbloqueado. Coinjoin y Ark solo con hot wallets; pruébalos primero con poco.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
