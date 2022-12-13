import { resolve } from "node:path";
import { readdir, rename as renameFile } from "node:fs/promises";

import { __dirname, pathToFiles } from "./constants.js";

const nameFile = "wrongFilename.txt";
const newFile = "properFilename.md";

const filtering = (fileName) => fileName === nameFile || fileName === newFile;

const rename = async () => {
  try {
    const files = await readdir(pathToFiles);
    if (files.find((fileName) => fileName === newFile)) {
      console.log("The file has been renamed");
      return;
    }
    if (files.filter(filtering).length === 0) {
      throw new Error("FS operation failed");
    }
    await renameFile(
      resolve(pathToFiles, nameFile),
      resolve(pathToFiles, newFile)
    );
  } catch (error) {
    console.log(error.message);
  }
};

await rename();
