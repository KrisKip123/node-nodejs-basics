import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { resolve } from "node:path";

import { __dirname } from "./constants.js";

const nameNewFile = "fileToCompress.txt";
const nameZip = "archive.gz";
const nameFolder = "files";

const decompress = async () => {
  const readStream = createReadStream(resolve(__dirname, nameFolder, nameZip));
  const writeStream = createWriteStream(
    resolve(__dirname, nameFolder, nameNewFile)
  );
  const unZip = createUnzip();
  readStream.pipe(unZip).pipe(writeStream);
};

await decompress();
