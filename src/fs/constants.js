import { resolve } from "node:path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFiles = resolve(__dirname, "files");

export { __dirname, pathToFiles };
