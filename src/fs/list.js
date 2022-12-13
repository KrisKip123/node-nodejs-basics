import { pathToFiles } from "./constants.js";
import { stat, readdir } from "node:fs/promises";

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
