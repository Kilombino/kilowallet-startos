import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.10.1:0',
  releaseNotes: {
    en_US:
      'Coinjoin rounds are safer after you sign, as in Kilowallet 1.5.1: the coins of a round you signed stay held until its transaction confirms, or until a coin of the round is spent elsewhere and that spend is 6 blocks deep (a spend still in the mempool, or a block or two deep, no longer frees them). A round shows confirmed only after 6 blocks (confirmed 2/6 meanwhile), and if a reorganisation drops its transaction it is sent again. A failed broadcast no longer cancels the round, and a transaction not seen for 12 hours is no longer given up: it is sent again until the node takes it. This applies to every pool. In asynchronous (v6) pools the server posts its signatures again every day once it signed. Same protocol: works with Kilowallet 1.5.0, Kilojoin 0.10.0 and other v6 wallets.',
    es_ES:
      'Las rondas de coinjoin son más seguras después de firmar, como en Kilowallet 1.5.1: las monedas de una ronda que firmaste siguen retenidas hasta que su transacción confirma, o hasta que una moneda de la ronda se gasta en otra transacción con 6 bloques encima (un gasto aún en la mempool, o con uno o dos bloques, ya no las libera). Una ronda sale como confirmada solo tras 6 bloques (mientras, confirmada 2/6), y si una reorganización tira su transacción, se envía de nuevo. Un envío fallido ya no cancela la ronda, y una transacción que no aparece en 12 horas ya no se abandona: se reenvía hasta que el nodo la acepta. Vale para todos los pools. En los pools asíncronos (v6) el servidor vuelve a publicar sus firmas cada día una vez firmado. Mismo protocolo: funciona con Kilowallet 1.5.0, Kilojoin 0.10.0 y otras carteras v6.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
