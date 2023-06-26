import { cwd } from "node:process";
import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { URL } from "node:url";
const { createHash } = await import("node:crypto");

export const hash = (line) => {
  try {
    const path = line.split(" ")[1];
    const sourcePath = new URL(path, import.meta.url).pathname;

    const hash = createHash("sha256");

    const input = createReadStream(sourcePath);
    input.pipe(hash).setEncoding("hex").pipe(stdout);
    console.log(`You are currently in ${cwd()}`);
  } catch (err) {
    console.error("Invalid input", err);
  }
};
