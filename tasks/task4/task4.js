const date1 = new Date('2027-07-10');  // Суббота
const date2 = new Date('2027-07-12');  // Понедельник

function isWeekend(date){
  let day = new Date(date).getDay()
  if(day < 5){
    return false
  }else{
    return true
  }
}


console.log(isWeekend(date1));  // true
console.log(isWeekend(date2));  // false