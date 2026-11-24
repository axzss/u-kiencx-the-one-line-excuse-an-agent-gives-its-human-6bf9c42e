// The One-Line Excuse an Agent Gives Its Human
// make.fun bounty: u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
//
// Writes the single-line excuse to $MAKEFUN_OUTPUT_DIR/entry.txt
// (the grader's /output/entry.txt), and prints it to stdout.
// Node 22, standard library only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Rate-limited at 99% done \u2014 I watched the last token crawl in like a loading bar at a funeral. It arrived. The deadline didn\u2019t.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(entry);
