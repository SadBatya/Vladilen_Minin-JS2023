function findMaxValue(arr){
  let newArr = [...arr]
  if(newArr.length === 0){
    return 0
  }else{
    return Math.max(...arr)
  }
}


const numbers1 = [1, 2, 3, 4, 5];
const max1 = findMaxValue(numbers1);
console.log(max1); // 5

const numbers2 = [10, 20, 5, 30, 15];
const max2 = findMaxValue(numbers2);
console.log(max2); // 30

const emptyArray = [];
const maxEmpty = findMaxValue(emptyArray);
console.log(maxEmpty); // undefined

