import { cwd } from "node:process";
import fs from "node:fs";
import { URL } from "node:url";
import { rm as rem } from "node:fs/promises";

export const rm = async (line) => {
  const pathToFile = line.split(" ")[1];

  const path = new URL(pathToFile, import.meta.url).pathname;

  try {
   
    await rem(path);

    console.log(`You are currently in ${cwd()}`);
  } catch {
    console.error("Invalid input");
  }
};