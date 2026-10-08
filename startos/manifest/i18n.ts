export const short = {
  en_US: 'Kilowallet, the Bitcoin BLAKE2b (XBT) wallet, on your own node',
  es_ES: 'Kilowallet, la wallet de Bitcoin BLAKE2b (XBT), en tu propio nodo',
}

export const long = {
  en_US:
    "Kilowallet on your StartOS server: the same wallet code as the Kilowallet Android app, with a web app made for the phone (install it to your home screen), reading the chain straight from your own BLAKE2b node, with no Electrum server in between. The node gets a watch-only wallet (the public key only) that tracks history, the mempool and balances; the words of a hot wallet stay encrypted with your password on this server and never enter the node. Send with coin control, speed up with RBF or CPFP, a second confirmation for a fee that looks like a slip, contacts and street mode. A watch-only wallet sends through a PSBT signed elsewhere. Every signature uses the unified sighash (0x21), so a spend cannot be replayed on the SHA-256 chain. Updates come from the Kilombino store.",
  es_ES:
    'Kilowallet en tu servidor StartOS: el mismo código de wallet que la app Kilowallet para Android, con una web hecha para el móvil (instálala en la pantalla de inicio), que lee la cadena directamente de tu propio nodo BLAKE2b, sin servidor Electrum de por medio. El nodo recibe una wallet de solo vigilancia (solo la clave pública) que lleva el historial, el mempool y los saldos; las palabras de una hot wallet se guardan cifradas con tu contraseña en este servidor y nunca entran en el nodo. Envía con control de monedas, acelera con RBF o CPFP, segunda confirmación si la comisión parece un error, contactos y street mode. Una wallet de solo vigilancia envía con un PSBT firmado aparte. Todas las firmas usan el sighash unificado (0x21), así que un gasto no se puede replayar en la cadena SHA-256. Las actualizaciones llegan de la tienda de Kilombino.',
}

export const nodeDescription = {
  en_US:
    'Kilowallet reads your balance and history from, and broadcasts through, your own BLAKE2b node (its wallet feature must be on). Either one works: Bitcoin Knots (BLAKE2b) Companion, or Bitcoin on the BLAKE2b chain.',
  es_ES:
    'Kilowallet lee tu saldo y tu historial de tu propio nodo BLAKE2b, y emite a través de él (con su función de wallet activada). Vale cualquiera de los dos: Bitcoin Knots (BLAKE2b) Companion, o Bitcoin en la cadena BLAKE2b.',
}
