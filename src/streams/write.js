import { createWriteStream } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const nameFolder = "files";
const fileName = "fileToWrite.txt";

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const writeStream = createWriteStream(
    resolve(__dirname, nameFolder, fileName)
  );
  process.stdin.pipe(writeStream);
};

await write();
