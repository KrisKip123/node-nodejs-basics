const parseEnv = () => {
  const arr = Object.keys(process.env).filter((key) => /RSS/.test(key));
  arr.forEach((nameKey) => {
    if (process.env?.[nameKey]) {
      console.log(`${nameKey}=${process.env?.[nameKey]};`);
    }
  });
};

parseEnv();
