import { pipeline, Transform } from "node:stream";

const transform = async () => {
  const transform = new Transform({
    transform(chunk, enc, cb) {
      const data = chunk.toString().trim();

      this.push(`${[...data].reverse().join("")}\n`);

      cb();
    },
  });

  pipeline(process.stdin, transform, process.stdout, (err) => {
    console.log("Error");
  });
};

await transform();
