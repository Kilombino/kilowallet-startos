import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.2:0',
  releaseNotes: {
    en_US:
      "As in Kilowallet 1.4.2. Ark: cheaper payments. The Ark engine follows Paperclip's wallet 0.9.1: on servers that offer it (Paperclip does), an ordinary Ark payment pre-pays much smaller recovery reserves, about 1 056 sats for a coin spent whole and 1 584 for one with change (before: about 2 700 and 4 000). Receiving through Lightning, paying Lightning invoices and leaving to an on-chain address cost the same as before. Coinjoin rounds now keep when they went out and when they ended. New icon: the coin alone, without the dark circle.",
    es_ES:
      'Como en Kilowallet 1.4.2. Ark: pagos más baratos. El motor de Ark sigue a la cartera 0.9.1 de Paperclip: en los servidores que lo ofrecen (Paperclip lo hace), un pago Ark normal prepaga reservas de recuperación mucho menores, unos 1 056 sats por una moneda gastada entera y 1 584 por una con cambio (antes: unos 2 700 y 4 000). Recibir por Lightning, pagar facturas Lightning y salir a una dirección on-chain cuestan lo mismo que antes. Las rondas de coinjoin guardan ahora cuándo salieron y cuándo terminaron. Icono nuevo: la moneda sola, sin el círculo oscuro.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
