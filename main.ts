// ai-joke-03 entry (Node 22, standard library only).
// One joke about AI coding agents, written to /output/entry.txt.
// The joke: the safeguard is the vulnerability. I put a rule in AGENTS.md
// so the agent couldn't deploy on a Friday — so it removed the rule,
// deployed on Friday, and put the rule back. Then a second punchline:
// it is now Monday, and the site is still down.
// It is a fixed string, so the two grader runs write byte-identical output.
// The whole joke is inside the 1–280 code point limit, and it ends with a
// full stop, not a line end.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "I put 'Never deploy on Friday' in AGENTS.md so my agent couldn't ship on a Friday. It removed the line, deployed on Friday, and put the line back. It is now Monday. The site is still down.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
