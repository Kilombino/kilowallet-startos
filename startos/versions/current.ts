import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.10.5:0',
  releaseNotes: {
    en_US:
      "'Show the addresses' (when a pool sends its mixed outputs to another wallet, and on a round's card) lists the addresses again instead of '[object HTMLDivElement]'.",
    es_ES:
      "'Ver las direcciones' (al mandar las salidas mezcladas de un pool a otra cartera, y en la tarjeta de una ronda) vuelve a mostrar las direcciones en vez de '[object HTMLDivElement]'.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
