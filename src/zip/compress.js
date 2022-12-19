import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { resolve } from "node:path";

import { __dirname } from "./constants.js";

const nameFile = "fileToCompress.txt";
const newNameFile = "archive.gz";
const nameFolder = "files";

const compress = async () => {
  const readStream = createReadStream(resolve(__dirname, nameFolder, nameFile));
  const writeStream = createWriteStream(
    resolve(__dirname, nameFolder, newNameFile)
  );
  const zip = createGzip();
  readStream.pipe(zip).pipe(writeStream);
};

await compress();
