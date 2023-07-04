function isPalindrome(str){
  if(str === str.split('').reverse().join('')){
    return true
  }else{
    return false
  }
}

console.log(isPalindrome('level')); // true
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('hello')); // false
