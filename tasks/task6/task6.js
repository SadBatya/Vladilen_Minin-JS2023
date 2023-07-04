function createCounter(value) {
  const inc = () => value++;
  const dec = () => value--;
  const get = () => value;

  return { inc, dec, get };
}

const { inc, dec, get } = createCounter(5);
console.log(get()); // 5
inc();
inc();
inc();
dec();
console.log(get()); // 7
