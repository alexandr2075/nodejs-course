import { chdir, cwd } from "node:process";

export const up = () => {
  try {
    chdir('..');
    console.log(`You are currently in ${cwd()}`);
  } catch {
    console.log('Invalid input');
  }
};

