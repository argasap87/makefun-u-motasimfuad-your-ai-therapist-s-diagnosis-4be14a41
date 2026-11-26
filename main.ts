// Your AI Therapist's Diagnosis — make.fun program/v1 entry.
// Writes the single-line diagnosis from the committed entry.txt to /output/entry.txt.
// Runs only on files already committed in this repository; no network, no build-time tools.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry.txt must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
