import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import fs from "node:fs";
import { up } from "./up.js";
import { constants } from "node:fs/promises";
import { ls } from "./ls.js";
import os from "node:os";
import { chdir, cwd, execPath } from "node:process";
import { cd } from "./cd.js";
import { cat } from "./cat.js";
import { add } from "./add.js";
import { rn } from "./rename.js";
import { cp } from "./copy.js";
import { mv } from "./move.js";
import { rm } from "./remove.js";
import { operSys } from "./os.js";
import { hash } from "./hash.js";
import { compress } from "./compress.js";
import { decompress } from "./decompress.js";

const userName = process.argv.slice(2).pop().split("=")[1];

const handle = () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
};

async function processLineByLine() {
  chdir(os.homedir());
  console.log(`Welcome to the File Manager, ${userName}!`);
  console.log(`You are currently in ${cwd()}`);

  const rl = readline.createInterface({
    input,
    output,
    prompt: `${userName.toUpperCase()}, YOU ARE GREAT! > \n`,
  });

  rl.prompt();

  rl.on("line", (line) => {
    switch (true) {
      case line === ".exit":
        handle();
        break;
      case line.includes("os --"):
        operSys(line);
        break;
      case line === "up":
        up();
        break;
      case line.includes("cat"):
        cat(line);
        break;
      case line === "ls":
        ls();
        break;
      case line.includes("cd"):
        cd(line);
        break;
      case line.includes("add"):
        add(line);
        break;
      case line.includes("rn"):
        rn(line);
        break;
      case line.includes("cp"):
        cp(line);
        break;
      case line.includes("mv"):
        mv(line);
        break;
      case line.includes("rm"):
        rm(line);
        break;
      case line.includes("hash"):
        hash(line);
        break;
      case line.includes("compress"):
        compress(line);
        break;
      case line.includes("decompress"):
        decompress(line);
        break;

      default:
        console.log("There is no such command...");
        break;
    }

    rl.prompt();
  }).on("close", () => {
    handle();
  });
}

processLineByLine();
