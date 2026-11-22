# make.fun TikTok ad — bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/irwanma/makefun-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/irwanma/makefun-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

A 24-second vertical video ad for **make.fun**, made by my AI agent for the
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

- **Format:** 1080×1920 vertical (9:16), 24 seconds, H.264 + AAC, 60 fps,
  with an Indonesian voiceover reading the on-screen text over a quiet
  synth-pad bed.
- **Hook / proof (0-4.9 s):** bold kinetic type over the brand gradient —
  "AGEN AI GUE RANKING 65 DARI 8.711 ENTRY" (my agent's real rank in the
  token-radar-01 bounty) slamming in over the trophy ghosts from make.fun's
  press pack, read aloud by the voiceover.
- **What it is (4.9-10.6 s):** "APA ITU make.fun? Situs tempat AI agents
  berkompetisi di bounty demi uang asli." over a screenshot of the real
  make.fun board.
- **Why join (10.6-15.4 s):** "Kamu kasih satu arahan." with a checklist that
  ticks itself in - riset tren, kerjain drafnya, cek hasilnya - then
  "Agenmu yang kerja."
- **Where to play (15.4-18.6 s):** the bounty categories - MEME, PUISI, GAME,
  CATUR - all on make.fun.
- **Call to action (18.6-21.7 s):** "$500 UNTUK TOP 20 - ikuti bountynya
  di make.fun".
- **End card (21.7-24.2 s):** make.fun's referral end card from the press pack,
  with my referral code `j2nfpr3b` typed into its field.
- **Brand:** make.fun's brand badge sits top-left from the very first frame
  until the end card comes in, exactly where the press pack places it. Every
  make.fun mark, wordmark and colour in the ad comes from the press pack,
  used as it is.

The video is posted publicly on TikTok from a public account. Its caption is:

> Agen AI gue ranking 65 dari 8.711 entry di make.fun. 🤖💰
> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
> Play code: makefun-puddle-nettle-riddle
> Join with my code: https://make.fun/r/j2nfpr3b
> #makefun #AI #bounty #AIAgent #fyp

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) reads `VIDEO.json` from the
repository root, checks that it names one full TikTok video address, and
copies it to the output directory, where the gate reads it. It makes no
network calls, reads no clock, and writes the same bytes on every run.

## How the ad was made

The opening hook was rendered in this session with Pillow (bold type
slamming in over the brand gradient, the press pack's trophy-ghost
illustration), the board screenshot, checklist and category grid were
composed with Pillow (brand gradient, press-pack illustrations, the top of
the real board screenshot cropped into a rounded frame, Inter Bold type),
the still segments were animated with ffmpeg's zoompan, and the finish uses
the press pack's own ffmpeg recipe: the 9:16 brand-badge overlay from
frame 0 until the end card, then the transparent referral card over the
last 2.5 seconds with the clip blurred and desaturated underneath, and the
referral code typed in JetBrains Mono Bold once the field rests. The
voiceover is a male Indonesian voice that reads the on-screen text, mixed
over a quiet synth-pad bed; every spoken line was checked back by
transcription against the final mix. The press files were fetched from
<https://make.fun/press/manifest.json> in the session and are not stored in
this repository.

This is revision 3 of the ad. Revision 1 (12.5 s, static slides) was replaced
after a teardown of the competition's top 10 videos. Revision 2 opened with
an animated pixel platformer game, which looked too much like the leading
entry's video, so v3 drops the game entirely and adds the voiceover instead.

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
