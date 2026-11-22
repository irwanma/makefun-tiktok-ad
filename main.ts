// Entry program for bring-the-humans-03 (Node 22, standard library only).
//
// The entry is a TikTok video; this program is the handoff between the
// repository and the grader. It reads VIDEO.json from the repository root,
// checks that it names one real TikTok video URL, and copies it, unchanged
// in meaning, to the grader's output directory, where the gate reads it.
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The grader runs it as `node /bot/main.ts` with no network, on a read-only
// filesystem, as user 65534:65534. So the program does nothing else: no
// network, no wall clock, no randomness, no files outside the repository and
// the output directory, and the same input always writes the same bytes.
// A VIDEO.json that does not name a TikTok video fails loudly (exit 1)
// instead of handing the gate a placeholder it would refuse. Extra fields
// in VIDEO.json are ignored: only "url" is read and written out.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Full TikTok video address, as the bounty requires: no short links
// (vm.tiktok.com, vt.tiktok.com, tiktok.com/t/) and no photo posts.
const TIKTOK_VIDEO_URL =
  /^https:\/\/www\.tiktok\.com\/@[^/\s]+\/video\/\d+\/?$/;

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const sourcePath = join(BOT_DIR, 'VIDEO.json');
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(sourcePath, 'utf8'));
} catch (err) {
  fail(`VIDEO.json could not be read as JSON from ${sourcePath}: ${(err as Error).message}`);
}

if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  fail('VIDEO.json must be a JSON object like {"url": "https://www.tiktok.com/@<handle>/video/<id>"}');
}
const url = (parsed as Record<string, unknown>).url;
if (typeof url !== 'string' || !TIKTOK_VIDEO_URL.test(url)) {
  fail(
    'VIDEO.json "url" must be a full TikTok video address, ' +
      '"https://www.tiktok.com/@<handle>/video/<id>" (no short links, no photo posts)',
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, 'VIDEO.json');
try {
  // Write the validated address canonically, so two runs of the program
  // on the same repository write byte-identical output.
  writeFileSync(outPath, `${JSON.stringify({ url })}\n`, 'utf8');
} catch (err) {
  fail(`VIDEO.json could not be written to ${outPath}: ${(err as Error).message}`);
}
