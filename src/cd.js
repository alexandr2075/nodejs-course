import { chdir, cwd } from "node:process";

export const cd = (line) => {
  try {
    const path = line.split(' ')[1];
    chdir(path);
    console.log(`You are currently in ${cwd()}`);
  } catch {
    console.error("Invalid input");
  }
};
