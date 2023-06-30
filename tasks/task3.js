function isPerfectNumber(num) {
  let sum = 0;

  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }

  if (sum === num && num > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPerfectNumber(6)); // true
console.log(isPerfectNumber(28)); // true
console.log(isPerfectNumber(12)); // false
console.log(isPerfectNumber(16)); // false
