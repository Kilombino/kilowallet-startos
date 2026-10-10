import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.0-beta2:0',
  releaseNotes: {
    en_US:
      "BETA. Ark, as in the Kilowallet app: a new ARK tab (opt-in) through the Paperclip Ark server (ark.paperclippool.xyz), with the same words as your wallet. Receive to an Ark address, a Lightning invoice (the receive cost is shown first, and the invoice shows when it is paid) or a reusable BOLT12 offer, or on-chain to a deposit you MOVE INTO ARK; send to Ark, Lightning or an XBT address, also from the deposit and with coin control, always with the exact cost before you confirm; renew, emergency exit and claim, activity and the engine log. The Ark engine (the app's own, Paperclip/bark) runs inside Kilowallet on 127.0.0.1 and reads the chain from your node over RPC (it needs txindex) or, if you choose, from mempool.kilombino.com. It starts once you unlock the wallet and keeps running after you lock it, renewing coins before they expire; after a restart it waits for your next unlock. Ark events (payments in and out, moves into Ark, renewals, withdrawals, coins close to expiry, the engine not running) arrive as StartOS notifications and through your Telegram bot. Backups include the Ark folder. Hot wallets only. A beta: try it with small amounts.",
    es_ES:
      'BETA. Ark, como en la app Kilowallet: una pestaña ARK nueva (opcional) a través del servidor Ark de Paperclip (ark.paperclippool.xyz), con las mismas palabras que tu wallet. Recibe en una dirección Ark, con una factura Lightning (primero ves lo que cuesta recibir, y la factura avisa cuando se paga) o con una oferta BOLT12 reutilizable, u on-chain en un depósito que pasas a Ark con MOVE INTO ARK; envía a Ark, a Lightning o a una dirección XBT, también desde el depósito y con control de monedas, siempre viendo el coste exacto antes de confirmar; renueva, salida de emergencia y reclamación, actividad y el log del motor. El motor Ark (el mismo de la app, Paperclip/bark) corre dentro de Kilowallet en 127.0.0.1 y lee la cadena de tu nodo por RPC (necesita txindex) o, si lo eliges, de mempool.kilombino.com. Arranca al desbloquear la wallet y sigue corriendo aunque la bloquees, renovando las monedas antes de que caduquen; tras un reinicio espera a que la desbloquees otra vez. Los avisos de Ark (pagos que llegan y salen, entradas en Ark, renovaciones, retiradas, monedas a punto de caducar, el motor parado) llegan como notificaciones de StartOS y por tu bot de Telegram. Las copias de seguridad incluyen la carpeta de Ark. Solo hot wallets. Es una beta: pruébala con cantidades pequeñas.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
