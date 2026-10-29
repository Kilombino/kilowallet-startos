import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.10.0-beta1:0',
  releaseNotes: {
    en_US:
      "Beta. The web page is now the Kilowallet Android app, screen by screen: the wallet at the top, the BTC, COINJOIN and ARK tabs, the same cards, buttons, dialogs and settings, the app's colours and fonts, and its languages (Spanish, English, Chinese, French, Italian, German, Catalan, Portuguese; chosen in settings). A new wallet is made from real dice rolls, as in the app (50 rolls for 12 words, 99 for 24, the same words a SeedSigner gives), written down and optionally checked back before it exists. Where the app asks for your fingerprint, the page asks for the wallet's password. The wallet itself works as in 0.9.2.",
    es_ES:
      'Beta. La página web es ahora la app Kilowallet de Android, pantalla por pantalla: el monedero arriba, las pestañas BTC, COINJOIN y ARK, las mismas tarjetas, botones, diálogos y ajustes, los colores y las fuentes de la app, y sus idiomas (español, inglés, chino, francés, italiano, alemán, catalán, portugués; se eligen en ajustes). Un monedero nuevo se crea con tiradas de dados de verdad, como en la app (50 tiradas para 12 palabras, 99 para 24, las mismas palabras que da un SeedSigner), se apunta y opcionalmente se comprueba antes de existir. Donde la app pide tu huella, la página pide la contraseña del monedero. El monedero en sí funciona como en la 0.9.2.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
