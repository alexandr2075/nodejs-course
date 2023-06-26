import { cwd } from "node:process";
import os from "node:os";

export const operSys = (line) => {
  try {
    switch (true) {
      case line.includes("os --EOL"):
        console.log(JSON.stringify(os.EOL));
        break;
      case line.includes("os --cpus"):
        const arr = os.cpus().map((cpu) => cpu.model);
        console.log(`Amount of CPUS: ${arr.length}\n`, arr);
        break;
      case line.includes("os --homedir"):
        console.log(os.homedir());
        break;
      case line.includes("os --username"):
        console.log(`Username: ${os.userInfo().username}`);
        break;
      case line.includes("os --architecture"):
        console.log(os.arch());
        break;
      default:
        console.log("There is no such command...");
        break;
    }

    console.log(`You are currently in ${cwd()}`);
  } catch {
    console.error("Invalid input");
  }
};
