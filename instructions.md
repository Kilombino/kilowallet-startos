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

## Coinjoin

- The **COINJOIN** tab mixes your coins with other people's, in the same pools as the Kilowallet app and
  Kilojoin (relay.kilombino.com). It is off until you turn it on there.
- Only a hot wallet can join. A pool is native SegWit (bc1q) or Taproot (bc1p), and takes coins of its
  type only: the wallet has both accounts (the Taproot one is set up at the first unlock after 0.3.0).
  You can bring several coins if the pool allows it, and make the perfect (exact) coin first: once it
  has one confirmation, it joins the pool (or opens the one you were setting up) by itself.
  Opening or joining asks for your password once; the server checks your mixed output, your change and
  your fee before signing.
- Keep Kilowallet running until the round is sent: the server keeps it going with the page closed.
  Pool events show up as StartOS notifications, and through your own Telegram bot if you set one.
- *Sign on its own* (on by default) accepts closing and signs by itself, so the password you gave when
  opening or joining is the only one. The keys of that round's coins stay in the server's memory until
  the round ends, also after you lock the wallet; if the service restarts, unlock it once to sign.
  A round closed with fewer people than the pool's minimum is never signed.

## Ark

- The **ARK** tab gives you Ark through the Paperclip Ark server (ark.paperclippool.xyz): fast, cheap
  payments to Ark addresses and to Lightning, without channels. It is off until you activate it
  there, after reading its warnings. Only a hot wallet can use it.
- **Same words as your wallet.** Activating asks for your password and uses your wallet's words, so
  one set of words backs up both. If those words already had Ark coins (in the Kilowallet app, for
  example), the Ark server hands them back; their history does not come back. Do not run the same
  words in Ark in two places at once.
- **Chain source.** The Ark engine reads the chain from your node over RPC. That needs the node's
  transaction index (**txindex**) and a synced node; the tab tells you if something is missing. You
  can choose mempool.kilombino.com instead, as the phone app does.
- **Receive**: an Ark address, a Lightning invoice (the receive cost is shown before; about
  4 100 sats, so ask for at least about 5 500), a reusable BOLT12 offer, or a **deposit** address
  for plain on-chain XBT that you then **MOVE INTO ARK** (at least 20 000 sats, 3 confirmations).
- **Send** to an Ark address, a Lightning invoice or offer, or an XBT address (a withdrawal). The
  exact cost is shown first and your password is asked again. Every Ark payment pre-pays recovery
  reserves for the coins it uses, which can be a big share of a small payment.
- **Coins expire after about 30 days** (4 320 blocks). The Ark engine renews them by itself while
  Kilowallet runs. It needs your words to run, so **after a restart of Kilowallet or of the server,
  open Kilowallet and unlock it**: until then Ark is stopped, and a notification reminds you,
  more often when a coin is close to expiry. Locking the page does not stop it.
- **Backups**: StartOS backups of Kilowallet include the Ark folder. With the words alone the Ark
  server gives your coins back; only the backup lets you leave Ark on your own (the **emergency
  exit**) if the server ever disappears. Make a backup after each movement or renewal. Restoring an
  old backup brings back coins already spent; the tab then leaves them out of your balance.
- Ark events (payments in and out, moves into Ark, renewals, withdrawals, coins close to expiry,
  the engine not running) show up as StartOS notifications, and through your own Telegram bot if
  you set one (ARK tab → Notifications).

## Updates

New versions arrive through the Kilombino store (registry.kilombino.com) and StartOS offers them in
its Updates tab.
