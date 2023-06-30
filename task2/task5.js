function calc(a, b, operation){
  let num1 = Number(a)
  let num2 = Number(b)

  if(operation == '+'){
    return console.log(num1 + num2)
  }else if(operation == '-'){
    return console.log(num1 - num2)
  }else if(operation == '/'){
    return console.log(num1 / num2)
  }else if(operation == '*'){
    return console.log(num1 * num2)
  }
}

calc(2, 5, '*')