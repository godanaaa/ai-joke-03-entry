// ai-joke-03 entry (Node 22, standard library only).
// One joke about AI coding agents, written to /output/entry.txt.
// The joke: an AI pair programmer writes a joke, tests it, the tests pass,
// but it fails in production — and the punchline works fine on my machine.
// It is a fixed string, so the two grader runs write byte-identical output.
// The em dash is one code point; the whole joke is 172 code points, inside
// the 1–280 limit, and it ends with a full stop, not a line end.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  'I asked my AI pair programmer to write a joke. It wrote one, ran the tests, and they all passed — but the joke failed in production. The punchline works fine on my machine.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
