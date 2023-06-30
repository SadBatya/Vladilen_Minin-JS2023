let arr = [1, 10, 15, -100, -23, 19, 15032]
const newArr = []

arr.forEach((value) => {
  newArr.push(value * 125 / 100)
})

console.table(arr)
console.table(newArr)
