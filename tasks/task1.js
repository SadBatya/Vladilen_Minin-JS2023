function isPrimeNumber(num){
 for(let i = 2; i < num; i++){
  if(num % i === 0){
    return false
  }
 }
 return num !== 1;
}

for(let j = 0; j < 10; j++){
  console.log(isPrimeNumber(j))
}

// true
// false
// true
// true
// false
// true
// false
// true
// false
// false
