const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
let action = '+';
// console.log(typeof sum)

plus.onclick = function () {
  action = '+';
};

minus.onclick = function () {
  action = '-';
};

multiply.onclick = function(){
  action = '*'
}

divide.onclick = function(){
  action = '/'
}

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = 'red';
  } else {
    resultElement.style.color = 'green';
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  if (actionSymbol == '+') {
    return num1 + num2;
  } else if (actionSymbol == '-') {
    return num1 - num2;
  } else if (actionSymbol == '*') {
    return num1 * num2;
  }else if (actionSymbol == '/') {
    return num1 / num2;
  }
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);
  // if (action == '+') {
  //   const sum = Number(input1.value) + Number(input2.value);
  //   printResult(sum)
  //   resultElement.textContent = sum;
  // } else {
  //   const sum = Number(input1.value) - Number(input2.value);
  //   printResult(sum)
  // }
};
