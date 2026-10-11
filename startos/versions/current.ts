import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.0:0',
  releaseNotes: {
    en_US:
      "Taproot for the hot wallet, as in the Kilowallet app. Next to its native SegWit account (BIP-84, bc1q) the wallet now has a Taproot one (BIP-86, bc1p), set up the next time you unlock it. Both are always followed: the balance, coins and movements add them up. RECEIVE lets you pick bc1q or bc1p. A send (and coin control) can mix coins of both, each signed with its own key and the unified sighash, and the review shows where the change goes. Coinjoin: Taproot pools can now be opened and joined with your bc1p coins, and the perfect (exact) coin is made of the pool's type, paid with any of your coins.",
    es_ES:
      'Taproot en el hot wallet, como en la app Kilowallet. Junto a la cuenta native SegWit (BIP-84, bc1q), el monedero tiene ahora una Taproot (BIP-86, bc1p), que se crea la próxima vez que lo desbloquees. Las dos se siguen siempre: el saldo, las monedas y los movimientos las suman. RECIBIR deja elegir bc1q o bc1p. Un envío (y el coin control) puede mezclar monedas de las dos, cada una firmada con su clave y la firma unificada, y en la revisión ves a dónde va el cambio. Coinjoin: ya se pueden abrir pools Taproot y entrar en ellos con tus monedas bc1p, y la moneda perfecta (exacta) se crea del tipo del pool, pagada con cualquiera de tus monedas.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
