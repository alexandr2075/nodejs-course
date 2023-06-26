import { cwd } from "node:process";
import {rename } from "node:fs/promises";
import { URL } from "node:url";

export const rn = async (line) => {
  const source = line.split(" ")[1];
  const destination = line.split(" ")[2];

  const sourcePath = new URL(source, import.meta.url).pathname;
  const destinationPath = new URL(destination, import.meta.url).pathname;

  try {
    await rename(sourcePath, destinationPath);

    console.log(`You are currently in ${cwd()}`);
  } catch {
    console.error("Invalid input");
  }
};
