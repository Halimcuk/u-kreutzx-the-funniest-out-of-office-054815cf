// The Funniest Out-of-Office — one line, written by a person who has
// clearly given up on their inbox ever behaving itself. The line is
// fixed: the same text comes out on every run, by design.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm out of office until Tuesday — my inbox replied to itself this morning, and now the two of them are on holiday together.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
