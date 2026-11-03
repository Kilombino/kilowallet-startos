import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.10.0:0',
  releaseNotes: {
    en_US:
      "The web page is now the Kilowallet Android app, screen by screen: the wallet at the top, the BTC, COINJOIN and ARK tabs, the same cards, buttons, dialogs and settings, the app's colours and fonts, and its languages (Spanish, English, Chinese, French, Italian, German, Catalan, Portuguese; chosen in settings). A new wallet is made from real dice rolls, as in the app (50 rolls for 12 words, 99 for 24, the same words a SeedSigner gives), written down and optionally checked back before it exists. Where the app asks for your fingerprint, the page asks for the wallet's password. New, as in Kilowallet 1.5.0: Kilojoin v6 pools with asynchronous rounds. When opening a pool, tick Asynchronous rounds for people who answer hours apart: up to an hour to answer, 30 minutes for the outputs and two hours to sign, with an end time no round goes past; nobody is left out without being asked again, and whoever holds every signature sends the transaction. As the creator, this server runs the round: keep it running until it is done. Once you signed, your coins stay held until the round confirms or one of its coins is spent elsewhere. Rounds are written to disk before anything is acknowledged. Only wallets that know Kilojoin v6 (Kilowallet 1.5.0, Kilojoin 0.10.0) see these pools; v3, v4 and v5 pools work as before.",
    es_ES:
      'La página web es ahora la app Kilowallet de Android, pantalla por pantalla: el monedero arriba, las pestañas BTC, COINJOIN y ARK, las mismas tarjetas, botones, diálogos y ajustes, los colores y las fuentes de la app, y sus idiomas (español, inglés, chino, francés, italiano, alemán, catalán, portugués; se eligen en ajustes). Un monedero nuevo se crea con tiradas de dados de verdad, como en la app (50 tiradas para 12 palabras, 99 para 24, las mismas palabras que da un SeedSigner), se apunta y opcionalmente se comprueba antes de existir. Donde la app pide tu huella, la página pide la contraseña del monedero. Nuevo, como en Kilowallet 1.5.0: pools Kilojoin v6 con rondas asíncronas. Al abrir un pool, marca Rondas asíncronas para gente que responde con horas de diferencia: hasta una hora para responder, 30 minutos para las salidas y dos horas para firmar, con una hora final que ninguna ronda pasa; nadie queda fuera sin que se le vuelva a preguntar, y quien tenga todas las firmas envía la transacción. Como creador, este servidor lleva la ronda: mantenlo en marcha hasta que acabe. Una vez firmado, tus monedas quedan apartadas hasta que la ronda se confirme o una de sus monedas se gaste en otro sitio. Las rondas se guardan en disco antes de confirmar nada. Solo las carteras que conocen Kilojoin v6 (Kilowallet 1.5.0, Kilojoin 0.10.0) ven estos pools; los pools v3, v4 y v5 funcionan como antes.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
