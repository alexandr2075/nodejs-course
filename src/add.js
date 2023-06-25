import { cwd } from "node:process";
import { writeFile } from "node:fs/promises";
import { URL } from "node:url";

export const add = async (line) => {
  const pathFile = line.split(" ")[1];

  const absPath = new URL(pathFile, import.meta.url).pathname;

  try {
    await writeFile(absPath, "", { flag: "wx" });

    console.log(`You are currently in ${cwd()}`);
  } catch {
    console.error("Invalid input");
  }
};
