import {
  Worker,
  isMainThread,
  workerData,
  parentPort,
} from "node:worker_threads";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { cpus } from "node:os";

const nameFile = "worker.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
  const workersArray = await Promise.allSettled(
    cpus().map((_, index) => {
      return new Promise((res, rej) => {
        const worker = new Worker(resolve(__dirname, nameFile), {
          workerData: { n: 10 + index },
        });
        worker.on("error", (mes) => {
          rej(mes);
        });
        worker.on("message", (mes) => {
          res(mes);
        });
      });
    })
  );
  const result = workersArray.map(({ status, value }) => {
    return {
      status: status === "fulfilled" ? "resolved" : "error",
      data: status === "fulfilled" ? value : null,
    };
  });
  console.log(result);
};

await performCalculations();
