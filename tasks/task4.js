function getNumberDigit(number, digitPosition){
  let str = String(number)
  return console.log(str[digitPosition])
}

getNumberDigit(123, 0) // 1
getNumberDigit(123, 1) // 2
getNumberDigit(123, 2) // 3
getNumberDigit(1, 2) // undefined