import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.10.4:0',
  releaseNotes: {
    en_US:
      "As in Kilowallet 1.5.6: a movement's details follow its live state while open (a confirmation shows at once and speed-up/cancel disappear), and a relay error on the coinjoin tab no longer covers a join or round message.",
    es_ES:
      'Como en Kilowallet 1.5.6: el detalle de un movimiento sigue su estado real mientras está abierto (la confirmación sale al momento y desaparecen acelerar/cancelar), y un error del relay en la pestaña de coinjoin ya no tapa el aviso de unirse o de la ronda.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
