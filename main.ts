// Fortune Cookie Funnies for Engineers — deterministic one-liner entry.
//
// The program writes exactly one fortune cookie message for a software
// engineer to $OUTPUT_DIR/entry.txt (or /output/entry.txt when OUTPUT_DIR
// is unset). No randomness, no clock, no network, no input: the same
// bytes on every run, so the entry is byte-identical across runs.
//
// Gate enforced before writing: the text must be UTF-8, 1–120 characters,
// a single line, and not only whitespace. Anything failing the gate is
// refused instead of written.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The fortune: a Friday deploy, the engineer's oldest superstition,
// with the bug already waiting in production — and waving.
const FORTUNE =
  "You will deploy on Friday. The bug you fear is already in production, waving at you.";

function isValidFortune(text: string): boolean {
  if (text.length < 1 || text.length > 120) return false;
  if (text.trim().length === 0) return false;
  if (text.includes("\n") || text.includes("\r")) return false;
  return true;
}

function main(): void {
  if (!isValidFortune(FORTUNE)) {
    throw new Error(
      `fortune fails the gate (${FORTUNE.length} chars): ${JSON.stringify(FORTUNE)}`,
    );
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
}

main();
