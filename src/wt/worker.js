import {
  Worker,
  isMainThread,
  workerData,
  parentPort,
} from "node:worker_threads";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const nameFile = "worker.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  if (isMainThread) {
    const worker = new Worker(resolve(__dirname, nameFile), {
      workerData: { n: 10 },
    });
    worker.on("message", (result) => {
      console.log(result);
    });
  } else {
    const { n } = workerData;
    parentPort.postMessage(nthFibonacci(n));
  }
};

sendResult();
