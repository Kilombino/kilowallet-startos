import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.0:0',
  releaseNotes: {
    en_US:
      "As in Kilowallet 1.3.0. Pay through a coinjoin: SEND takes several recipients, and once they are filled in it offers to pay them through a new pool. Equal amounts of one address type make a pool whose outputs for you go straight to the recipients; different amounts make a payment pool (Kilojoin v5, 1 to 5 recipients, all bc1q or all bc1p): the others put in the same total and get it back in equal outputs. The payment only goes out when the pool closes; if it doesn't fill, nothing is paid, and BACK returns to SEND as it was. Open a pool from your coins: tick whole coins and the amount is worked out so there is no change. The pool minimum is now per person in all (2 × 5 000 is a pool, 3 × 3 000 only a test). Payment pools opened by others are listed and joined like any other, and a payment pool's card shows what it pays and to whom.",
    es_ES:
      'Como en Kilowallet 1.3.0. Pagar a través de un coinjoin: ENVIAR admite varios destinatarios y, una vez rellenos, ofrece pagarles a través de un pool nuevo. Importes iguales de un mismo tipo de dirección abren un pool cuyas salidas para ti van directas a los destinatarios; importes distintos, un pool de pago (Kilojoin v5, de 1 a 5 destinatarios, todos bc1q o todos bc1p): los demás ponen el mismo total y lo recuperan en salidas iguales. El pago solo sale cuando el pool se cierra; si no se llena, no se paga nada, y ATRÁS vuelve a ENVIAR tal como estaba. Abrir un pool con tus monedas: marca monedas enteras y el importe se calcula para que no haya cambio. El mínimo de un pool es ahora por persona en total (2 × 5 000 es un pool, 3 × 3 000 solo una prueba). Los pools de pago que abren otros se listan y se unen como cualquier otro, y la tarjeta de un pool de pago muestra qué paga y a quién.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
