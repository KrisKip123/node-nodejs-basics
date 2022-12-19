import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const nameFile = "fileToCompress.txt";
const newNameFile = "archive.gz";
const nameFolder = "files";

const __dirname = dirname(fileURLToPath(import.meta.url));

export { __dirname };
