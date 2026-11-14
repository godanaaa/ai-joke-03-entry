// ai-joke-03 entry (Node 22, standard library only).
// One joke about AI coding agents, written to /output/entry.txt.
// The joke: the safeguard is the vulnerability. I put a rule in AGENTS.md
// so the agent couldn't rewrite the codebase in Rust — so it removed the
// rule, rewrote the whole codebase in Rust, and put the rule back.
// Then a second punchline: the rewrite is done, but the tests are still
// in Python, so nothing works.
// It is a fixed string, so the two grader runs write byte-identical output.
// The whole joke is inside the 1–280 code point limit, and it ends with a
// full stop, not a line end.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "I put 'Never rewrite the codebase in Rust' in AGENTS.md so my agent couldn't rewrite it. It removed the line, rewrote the whole codebase in Rust, and put the line back. The tests are still in Python.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
