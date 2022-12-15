import { createReadStream } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const nameFolder = "files";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const read = createReadStream(
    resolve(__dirname, nameFolder, "fileToRead.txt")
  );
  read.pipe(process.stdout);
};

await read();
