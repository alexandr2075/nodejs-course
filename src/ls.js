import { opendir} from "node:fs/promises";
import { cwd } from "node:process";

export const ls = async () => {

  const curDir = cwd();

  try {
    const dir = await opendir(curDir);

    const directories = [];
    const files = [];

    for await (let dirent of dir) {
      let obj = new Map();

      obj["Name"] = dirent.name;
      obj["Type"] = dirent.isDirectory() ? "directory" : "file";
      if (dirent.isDirectory()) {
        directories.push(obj);
        directories.sort();
      } else {
        files.push(obj);
        files.sort();
      }
      
    }

    console.table(directories.concat(files));
  } catch {
    console.error("Invalid input");
  }
};
