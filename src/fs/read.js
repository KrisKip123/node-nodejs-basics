import { open, opendir } from "node:fs/promises";
import { resolve } from "node:path";

import { pathToFiles } from "./constants.js";

const fileRead = "fileToRead.txt";

const read = async () => {
  try {
    const file = await open(resolve(pathToFiles, fileRead), "r");
    const data = await file.readFile({ encoding: "utf-8" });
    console.log(data);
  } catch (error) {
    console.log("FS operation failed");
  }
};

await read();
