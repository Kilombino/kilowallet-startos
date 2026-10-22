import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.7.0:0',
  releaseNotes: {
    en_US:
      'As in Kilowallet 1.2.3. Coinjoin outputs to another wallet: in the COINJOIN tab, add a watch-only wallet (its zpub, or a Taproot xpub) or your Jam wallet (its "View in Kilowallet" line) with the day it was made; the node keeps a watch-only copy of it, and a pool\'s mixed outputs can go to its first addresses that never received anything (this wallet stays the default; it works for the perfect coin too). 36 fiat currencies, and an amount box in your currency in Send and Receive (BTC and Ark); BTC receive can ask for an amount in its QR. Movements fold away so Coins stays at hand.',
    es_ES:
      'Como en Kilowallet 1.2.3. Salidas de coinjoin hacia otro monedero: en la pestaña COINJOIN añade un monedero de solo lectura (su zpub, o una xpub Taproot) o tu monedero de Jam (su línea de "View in Kilowallet") con el día en que se creó; el nodo guarda una copia de solo lectura y las salidas mezcladas de un pool pueden ir a sus primeras direcciones que nunca recibieron nada (este monedero sigue siendo el predeterminado; también vale para la moneda perfecta). 36 monedas fiat y un campo en tu moneda en Enviar y Recibir (BTC y Ark); al recibir BTC puedes pedir un importe en el QR. Los movimientos se pliegan para tener Coins a mano.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
