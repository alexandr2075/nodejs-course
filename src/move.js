import { cwd } from "node:process";
import fs from "node:fs";
import { URL } from "node:url";
import { rm } from "node:fs/promises";

export const mv = async (line) => {
  const source = line.split(" ")[1];
  const destination = line.split(" ")[2];

  const sourcePath = new URL(source, import.meta.url).pathname;
  const destinationPath = new URL(`${destination}/${source}`, import.meta.url).pathname;

  try {
    const r = fs.createReadStream(sourcePath);
    const w = fs.createWriteStream(destinationPath);
    r.pipe(w);
    await rm(sourcePath);

    console.log(`You are currently in ${cwd()}`);
  } catch {
    console.error("Invalid input");
  }
};