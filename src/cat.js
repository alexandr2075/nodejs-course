import { stdout, cwd } from "node:process";
import { open } from "node:fs/promises";
import { URL } from "node:url";

export const cat = async (line) => {
  try {
    const pathFile = line.split(" ")[1];

    const absPath = new URL(pathFile, import.meta.url);

    const fileForRead = await open(absPath);
    const stream = fileForRead.createReadStream();
    stream.pipe(stdout);

    console.log(`You are currently in ${cwd()}`);
  } catch {
    console.error("Invalid input");
  }
};
