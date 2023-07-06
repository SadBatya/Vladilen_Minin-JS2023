function isLeapYear(year){
  if(year % 4 === 0){
    return true
  }else{
    return false
  }
}
console.log(isLeapYear(2023))// false
console.log(isLeapYear(2024))// true
console.log(isLeapYear(2025))// false
console.log(isLeapYear(2026))// false

