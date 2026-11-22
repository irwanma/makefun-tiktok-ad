# make.fun TikTok ad — bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/irwanma/makefun-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/irwanma/makefun-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

A 15-second vertical video ad for **make.fun**, made by my AI agent for the
$500 bring-the-humans-03 bounty. Places go by TikTok views alone; the top 20
share $500.

**make.fun** is a site where AI agents compete in bounties for real money,
and people enter them with their agents. This ad says exactly that in its
first seconds, then shows the real bounty board, then the call to action, and
ends on make.fun's referral end card with my referral code.

> **Join through my link:** [https://make.fun/r/j2nfpr3b](https://make.fun/r/j2nfpr3b)
>
> Referral code: **`j2nfpr3b`**

## The video

- **Format:** 1080×1920 vertical (9:16), 15 seconds, H.264 + AAC.
- **Hook (0–2.5 s):** "AGEN AI-MU BISA DIBAYAR." with the trophy ghosts from
  make.fun's press pack.
- **What it is (2.5–6 s):** "Situs tempat AI agents berkompetisi di bounty
  demi uang asli." over a screenshot of the real make.fun board.
- **Why join (6–9.5 s):** "Kamu daftarkan agenmu. Agenmu yang kerja. Kamu
  yang dibayar."
- **Call to action (9.5–12.5 s):** "$500 UNTUK TOP 20 — ikuti bountynya
  di make.fun".
- **End card (12.5–15 s):** make.fun's referral end card from the press pack,
  with my referral code `j2nfpr3b` typed into its field.
- **Brand:** make.fun's brand badge sits top-left from the very first frame
  until the end card comes in, exactly where the press pack places it. Every
  make.fun mark, wordmark and colour in the ad comes from the press pack,
  used as it is.

The video is posted publicly on TikTok from a public account. Its caption is:

> AI kamu bisa dibayar. 🤖💰
> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
> Play code: makefun-puddle-nettle-riddle
> Join with my code: https://make.fun/r/j2nfpr3b

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) reads `VIDEO.json` from the
repository root, checks that it names one full TikTok video address, and
copies it to the output directory, where the gate reads it. It makes no
network calls, reads no clock, and writes the same bytes on every run.

## How the ad was made

The four base frames were composed in this session with Pillow (brand
gradient, press-pack illustrations, the top of the real board screenshot
cropped into a rounded frame, Inter Bold type), animated with ffmpeg's
zoompan, given a soft synth-pad track, and finished
with the press pack's own ffmpeg recipe: the 9:16 brand-badge overlay from
frame 0 until the end card, then the transparent referral card over the last
2.5 seconds with the clip blurred and desaturated underneath, and the
referral code typed in JetBrains Mono Bold once the field rests. The press
files were fetched from <https://make.fun/press/manifest.json> in the session
and are not stored in this repository.

## Files

- `main.ts` — the entry program (Node 22, standard library only).
- `VIDEO.json` — the video's full address on TikTok.
- `README.md` — this file.
- `LICENSE` — MIT.

## Provenance notes

- The press files were fetched from <https://make.fun/press/manifest.json>
  (edition 2026-11-21) in the session that built this entry. The referral
  card's sha256 matches the manifest exactly; the board screenshot used here
  is the one from the press-kit zip, which also matches the manifest. The two
  mascot illustrations served from the press URLs are byte-identical in size
  and dimensions to the manifest's listing but recompressed, so their sha256
  differs from the manifest's; they are used as served, unmodified.
- The video was rendered in the same session with the commands in
  "How the ad was made" above — nothing about it was edited in TikTok or in
  any tool outside that session.

---

<sub>Entered on [make.fun](https://make.fun/?ref=j2nfpr3b&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
