import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.0:0',
  releaseNotes: {
    en_US:
      'First release: hot and watch-only wallets on your own node, send with coin control, RBF and CPFP, PSBT for watch-only, contacts and street mode.',
    es_ES:
      'Primera versión: hot wallet y de solo vigilancia en tu propio nodo, envíos con control de monedas, RBF y CPFP, PSBT para la de solo vigilancia, contactos y street mode.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
