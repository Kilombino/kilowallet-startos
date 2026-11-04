import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.10.3:0',
  releaseNotes: {
    en_US:
      'Mined coins that are still maturing now show separately under your balance, with the block each one unlocks at and an estimated date. As before, they cannot be spent until they mature.',
    es_ES:
      'Las monedas minadas que aún están madurando ahora salen aparte bajo tu saldo, con el bloque en que se desbloquea cada una y una fecha estimada. Como antes, no se pueden gastar hasta que maduren.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
