const sentence = 'Hello, how are you?';
const str2 = 'dasd sad as dsa das d fa sf as fas d sa das sa f sa';

function countWords(str) {
  let arr = [];
  let count = 1;
  for (let symbol of str) {
    arr.push(symbol);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      count++;
    }
  }

  return count;
}

console.log(countWords(sentence)); // 4
console.log(countWords(str2)); // 16

// в моем варианте есть небольшой недостаток, 
// если между словами будет двойной пробел случайно, 
// то мой счетчик будет неправильно считать
