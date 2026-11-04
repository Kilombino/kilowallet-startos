import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.10.2:0',
  releaseNotes: {
    en_US:
      'As in Kilowallet 1.5.2: a member of an asynchronous (v6) pool no longer leaves with "the pool expired" while the pool can still reopen a vote before its final time; after a vote that timed out, the server waits for the creator\'s new vote until the pool\'s final time, as the protocol says. Same messages: works with Kilowallet 1.5.1, Kilojoin 0.10.1 and other v6 wallets.',
    es_ES:
      'Como en Kilowallet 1.5.2: un miembro de un pool asíncrono (v6) ya no se va con "the pool expired" mientras el pool aún puede reabrir una votación antes de su hora final; tras una votación que agotó su plazo, el servidor espera la votación nueva del creador hasta la hora final del pool, como dice el protocolo. Mismos mensajes: funciona con Kilowallet 1.5.1, Kilojoin 0.10.1 y otras carteras v6.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
