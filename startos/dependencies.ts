import { nodeDescription, torDescription } from './manifest/i18n'
import { sdk } from './sdk'
import { chosenNode } from './utils'

// One BLAKE2b node, synced: Kilowallet scans its UTXO set for the wallet and checks every
// coin offered to a pool against it. A pruned node is enough (no txindex is needed).
const companion = sdk.Dependency.optional('knots-blake2b', {
  description: nodeDescription,
  metadata: {
    title: 'Bitcoin Knots (BLAKE2b) Companion',
    icon: 'https://raw.githubusercontent.com/paulscode/knots-blake2b-startos/main/dep-icon.png',
  },
  versionRange: '>=1.0.0:30',
  kind: 'running',
  healthChecks: ['node', 'sync-progress'],
  enabled: async ({ effects }) =>
    (await chosenNode(effects)) === 'knots-blake2b',
})

const bitcoind = sdk.Dependency.optional('bitcoind', {
  description: nodeDescription,
  metadata: {
    title: 'Bitcoin',
    icon: 'https://raw.githubusercontent.com/Retropex/knots-startos/POW/icon.png',
  },
  versionRange: '*',
  kind: 'running',
  healthChecks: ['bitcoind', 'sync-progress'],
  enabled: async ({ effects }) => (await chosenNode(effects)) === 'bitcoind',
})

// Tor, for PAY THROUGH JOINBLAKET only: its directories are onions. Listed so it shows up as
// Kilowallet's optional dependency, but never required: the wallet runs without it, and the
// page says Tor is not available. Its SOCKS proxy is read in main.ts (bridge address, with the
// fixed 9050 fallback while Tor is not installed).
const tor = sdk.Dependency.optional('tor', {
  description: torDescription,
  metadata: {
    title: 'Tor',
    icon: 'https://raw.githubusercontent.com/Start9Labs/tor-startos/65faea17febc739d910e8c26ff4e61f6333487a8/icon.svg',
  },
  versionRange: '*',
  kind: 'running',
  healthChecks: [],
  enabled: async () => false,
})

export const dependencies = sdk.Dependencies.of()
  .addDependency(companion)
  .addDependency(bitcoind)
  .addDependency(tor)
