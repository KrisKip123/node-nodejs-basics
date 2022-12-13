import { resolve } from "node:path";
import { mkdir, stat, readdir, copyFile } from "node:fs/promises";

import { __dirname, pathToFiles } from "./constants.js";

const dirNameFolderCopy = resolve(...[__dirname, "files_copy"]);

const copy = async () => {
  try {
    await stat(pathToFiles);
    await mkdir(dirNameFolderCopy, { recursive: false });
    const files = await readdir(pathToFiles);

    files.forEach(async (fileName) => {
      await copyFile(
        resolve(pathToFiles, fileName),
        resolve(dirNameFolderCopy, fileName)
      );
    });
  } catch (error) {
    console.log("FS operation failed");
  }
};

await copy();
