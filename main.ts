import { mkdirSync, writeFileSync } from "node:fs";

// One-line pitch for make.fun: one sentence, at most 240 characters.
// It speaks to a friend who has never coded and has been carrying an
// app idea for months: today is the day to take the first step, in
// plain words, and let an AI agent build a first working version to
// try for free, with no coding needed.
const pitch =
  "That app idea you've carried for months deserves a first step today — say it in one plain sentence and an AI agent on make.fun will build a working version for you to try, free, no coding needed.";

// The competition caps the pitch at 240 characters, counted in
// Unicode code points, and the entry must stay a single line.
// Refuse to write anything outside those bounds.
const length = [...pitch].length;
if (length < 1 || length > 240) {
  throw new Error(`pitch must be 1-240 characters, got ${length}`);
}
if (pitch.includes("\n")) {
  throw new Error("pitch must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, pitch, "utf8");
