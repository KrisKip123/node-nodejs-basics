import { opendir, open } from "node:fs/promises";
import { createHash } from "node:crypto";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const nameFolder = "files";
const fileName = "fileToCalculateHashFor.txt";

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  try {
    const file = await open(resolve(__dirname, nameFolder, fileName), "r");
    const text = await file.readFile({ encoding: "utf-8" });
    const hash = createHash("sha256").update(text).digest("hex");
    console.log(hash);
  } catch (error) {
    console.log(error.message);
  }
};

await calculateHash();
