function sumNumbers(...obj){
  let sum = 0;
  for(let i = 0; i < obj.length; i++){
    sum += obj[i]
  }
  return sum
}


const result1 = sumNumbers(1, 2, 3, 4, 5);
console.log(result1); // 15


const result2 = sumNumbers(10, 20, 30);
console.log(result2); // 60

