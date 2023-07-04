function createCounter(value) {
  let newNum = value
  function inc(newNum){
    newNum++
  }
  function dec(newNum){
    newNum--
  }
  function get(newNum){
    newNum
  }
  return newNum
}

const { inc, dec, get } = createCounter(5);
// console.log(get()); // 5
inc();
inc();
inc();
dec();
// console.log(get()); // 7