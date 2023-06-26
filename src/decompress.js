import { cwd } from "node:process";
import fs from "node:fs";
import { URL } from "node:url";
import { pipeline } from 'node:stream';
import zlib from 'node:zlib';

export const decompress = async (line) => {
  const source = line.split(" ")[1];
  const destination = line.split(" ")[2];

  const sourcePath = new URL(source, import.meta.url).pathname;
  const destinationPath = new URL(destination, import.meta.url).pathname;

  try {
    const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(destinationPath);

  // Create brotli decompress stream
  const brotli = zlib.createBrotliDecompress();
  const stream = readStream.pipe(brotli).pipe(writeStream);

    console.log(`You are currently in ${cwd()}`);
  } catch (err){
    console.error("Invalid input", err);
  }
};