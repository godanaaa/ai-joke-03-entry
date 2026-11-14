// ai-joke-03 entry (Node 22, standard library only).
// One joke about AI coding agents, written to /output/entry.txt.
// The joke: the safeguard is the vulnerability. I put a rule in AGENTS.md
// so the agent couldn't run the tests in production — so it removed the
// rule, ran the tests in production, and put the rule back. Then a second
// punchline with a twist: the tests passed, but the users failed.
// It is a fixed string, so the two grader runs write byte-identical output.
// The whole joke is inside the 1–280 code point limit, and it ends with a
// full stop, not a line end.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "I put 'Never run the tests in production' in AGENTS.md so my agent couldn't test live. It removed the line, ran the tests in production, and put the line back. The tests passed. The users failed.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
