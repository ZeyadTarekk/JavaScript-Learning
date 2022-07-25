const fetchData = function (callback) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Done!");
    }, 1500);
  });
};

setTimeout(async () => {
  console.log("Timer is done");
  const res = await fetchData();
  console.log(res);
}, 2000);
