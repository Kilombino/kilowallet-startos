# Kilowallet

Kilowallet is the Bitcoin BLAKE2b (XBT) wallet of the Kilowallet Android app, on your own server and
your own node.

## First steps

1. Install a BLAKE2b node: **Bitcoin Knots (BLAKE2b) Companion** or **Bitcoin** on the BLAKE2b chain.
   Its wallet feature must be on (the default). If both are installed, the action *Choose BLAKE2b
   node* picks one.
2. Open Kilowallet's web interface. On your phone, use your browser's *Add to home screen* to get it as an app.
3. Choose a password, then create a new wallet, restore one from its words, or watch one by its
   extended public key (xpub / ypub / zpub).

## How it works

- Your node gets a **watch-only** wallet named `kilowallet-…`: only the public key, no private
  keys. It tracks your history, the mempool and your balance. A pruned node works too.
- A hot wallet's words are encrypted with your password on this server, and the password is asked
  again before every send. **There is no way to recover the password**: keep your words safe.
- A restored wallet: the node looks back from the oldest coin it still holds (or from the date you
  give). Older movements need an unpruned node and a rescan (in settings).
- A watch-only wallet sends by exporting a PSBT, signing it elsewhere (for example in Bitcoin
  Knots) and bringing it back. Only BLAKE2b unified (0x21) signatures are accepted.

## Coinjoin (beta)

- The **COINJOIN** tab mixes a coin with other people's, in the same pools as the Kilowallet app and
  Kilojoin (relay.kilombino.com). It is off until you turn it on there.
- Only a hot wallet with native SegWit (bc1q) addresses can join. Joining and signing ask for your
  password; the server checks your mixed output, your change and your fee before signing.
- Keep Kilowallet running until the round is sent: the server keeps it going with the page closed.
  Pool events show up as StartOS notifications, and through your own Telegram bot if you set one.
- *Sign on its own* (optional) accepts and signs by itself, only while the wallet is unlocked.

## Updates

New versions arrive through the Kilombino store (registry.kilombino.com) and StartOS offers them in
its Updates tab.
