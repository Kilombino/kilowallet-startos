import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.11.0:0',
  releaseNotes: {
    en_US:
      'PAY THROUGH JOINBLAKET, as in Kilowallet 1.6.0: a payment to one bc1q address can go out as the CoinJoin output of a JoinMarket CoinJoin on the BTC chain, with makers that hold a fidelity bond. SEND shows the market (makers, minimum, maximum and the cost for the amount); you confirm each maker’s fee and the mining fee before anything about your coins leaves the server, then follow the progress and get the txid with a link to the explorer. The JoinBlaket directory is an onion: install the Tor service (optional dependency) to use it; everything else works without it.',
    es_ES:
      'PAGAR CON JOINBLAKET, como en Kilowallet 1.6.0: un pago a una dirección bc1q puede salir como la salida CoinJoin de un CoinJoin de JoinMarket en la cadena BTC, con makers que tienen fidelity bond. ENVIAR muestra el mercado (makers, mínimo, máximo y el coste para el importe); confirmas la comisión de cada maker y la de minería antes de que salga del servidor nada sobre tus monedas, y después sigues el progreso y obtienes el txid con un enlace al explorador. El directorio de JoinBlaket es un onion: instala el servicio Tor (dependencia opcional) para usarlo; todo lo demás funciona sin él.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
