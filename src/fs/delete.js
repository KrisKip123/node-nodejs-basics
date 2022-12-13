import { rm } from "node:fs/promises";
import { resolve } from "node:path";

import { pathToFiles } from "./constants.js";

const fileNameDelete = "fileToRemove.txt";

const remove = async () => {
  try {
    await rm(resolve(pathToFiles, fileNameDelete));
  } catch (error) {
    console.log("FS operation failed");
  }
};

await remove();
