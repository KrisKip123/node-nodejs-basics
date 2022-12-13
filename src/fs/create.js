import { open } from "node:fs/promises";
import { resolve } from "node:path";

import { __dirname, pathToFiles } from "./constants.js";

const pathToFile = resolve(pathToFiles, "fresh.txt");

const create = async () => {
  try {
    const file = await open(pathToFile, "wx");
    await file.write("I am fresh and young");
    file.close();
  } catch (error) {
    console.log("FS operation failed");
  }
};

await create();
