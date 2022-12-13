import { pathToFiles } from "./constants.js";
import { mkdir, stat, readdir, copyFile } from "node:fs/promises";
import { log } from "node:console";

const list = async () => {
  try {
    await stat(pathToFiles);
    const files = await readdir(pathToFiles);
    console.log(files);
  } catch (error) {
    console.log("FS operation failed");
  }
};

await list();
