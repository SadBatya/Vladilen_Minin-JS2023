function sumWithDelay(delay, a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, delay);
  });
}

async function start() {
  const result = await sumWithDelay(1000, 5, 5);
  console.log(result);
}

start();