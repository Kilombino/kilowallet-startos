import { sdk } from './sdk'

// vault.json (the words, encrypted with the user's password), the wallet's address indexes,
// any round in progress, and ark/: the Ark engine's wallet (its database of coins, with the signed
// recovery transactions the emergency exit needs, and its config). The words alone get the coins
// back only through the Ark server; this folder works without it.
export const { createBackup, restoreInit } = sdk.setupBackups(
  async ({ effects }) => sdk.Backups.ofVolumes('main'),
)
