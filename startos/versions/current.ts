import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.0:0',
  releaseNotes: {
    en_US:
      "As in Kilowallet 1.2.6. Cancel an unconfirmed send: in its details, ✕ CANCEL replaces it (RBF) with one that sends the same coins back to a fresh address of this wallet, paying a little more fee; cancelling the payment that makes a perfect coin drops that coin and its pool. The perfect coin's change goes to the pool's address type. Coinjoin to another wallet: SHOW THE ADDRESSES lists the unused addresses the mixed outputs would take, with their path, to compare with that wallet before joining, and a round's card shows its real addresses and which wallet (name and key start). A plain xpub asks for its address type, and a key that is not an account key is pointed out. Each open pool is notified once. The COINJOIN tab can be opened without notifications, and settings open in place of the page. Speeding up or cancelling no longer takes a minute.",
    es_ES:
      'Como en Kilowallet 1.2.6. Cancelar un envío sin confirmar: en su detalle, ✕ CANCELAR lo sustituye (RBF) por otro que devuelve las mismas monedas a una dirección nueva de este monedero, pagando algo más de comisión; cancelar el pago que crea una moneda perfecta la descarta junto con su pool. El cambio de la moneda perfecta va al tipo de dirección del pool. Coinjoin hacia otro monedero: MOSTRAR LAS DIRECCIONES enseña las direcciones sin usar que tomarían las salidas mezcladas, con su ruta, para compararlas con ese monedero antes de unirte, y la tarjeta de una ronda muestra sus direcciones reales y a qué monedero van (nombre e inicio de la clave). Una xpub a secas pide su tipo de dirección y se avisa si no es una clave de cuenta. Cada pool abierto se notifica una sola vez. La pestaña COINJOIN se puede abrir sin notificaciones y los ajustes se abren en lugar de la página. Acelerar o cancelar ya no tarda un minuto.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
