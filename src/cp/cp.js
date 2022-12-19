import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const nameFile = "script.js";
const nameFolder = "files";

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const customProcess = spawn("node", [
    resolve(__dirname, nameFolder, nameFile),
    ...args,
  ]);

  process.stdin.on("data", (data) => {
    customProcess.stdin.write(data);
  });

  customProcess.stdout.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

spawnChildProcess(["--some-arg value1", "--other 1337", "--arg2 42"]);
