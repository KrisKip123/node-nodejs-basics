const parseArgs = () => {
  const data = process.argv.slice(2).map((str) => str.replace(/-*/i, ""));
  for (let i = 0; i < data.length; i = i + 2) {
    console.log(`${data[i]} is ${data[i + 1]}`);
  }
};

parseArgs();
