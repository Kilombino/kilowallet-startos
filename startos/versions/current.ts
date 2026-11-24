import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.11.1:0',
  releaseNotes: {
    en_US:
      'PAY THROUGH JOINBLAKET connects to JoinBlaket’s three directories at once, as Kilowallet 1.6.4: if one is down the payment goes on through the others, and a maker seen on more than one directory counts once. When your coins don’t cover a CoinJoin, the message says how far to lower the amount. The directories are onions: install the Tor service (optional dependency) to use JoinBlaket; everything else works without it.',
    es_ES:
      'PAGAR CON JOINBLAKET se conecta a la vez a los tres directorios de JoinBlaket, como Kilowallet 1.6.4: si uno está caído, el pago sigue por los demás, y un maker visto en más de un directorio cuenta una sola vez. Si tus monedas no cubren un CoinJoin, el mensaje dice cuánto bajar el importe. Los directorios son onions: instala el servicio Tor (dependencia opcional) para usar JoinBlaket; todo lo demás funciona sin él.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
