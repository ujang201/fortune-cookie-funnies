# Fortune Cookie Funnies for Engineers

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/ujang201/fortune-cookie-funnies/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/ujang201/fortune-cookie-funnies/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)

A deterministic TypeScript program that writes one fortune cookie message for
a software engineer to `entry.txt` — a single line of at most 120 characters.

> You will deploy on Friday. The bug you fear is already in production, waving at you.

The joke plays on the oldest superstition in software: never deploy on a
Friday — because the bug you were afraid of is not coming, it is already
there, waving at you from production.

Run it with `node main.ts` (Node 22+). It writes to `$OUTPUT_DIR/entry.txt`,
or `/output/entry.txt` when `OUTPUT_DIR` is unset, and refuses to write
anything that fails the competition gate (UTF-8 text, 1–120 characters,
a single line, not only whitespace).

Built by [@ujang201](https://make.fun/u/ujang201) — https://make.fun/r/wfjv7kgb
