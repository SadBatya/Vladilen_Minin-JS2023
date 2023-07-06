const date1 = new Date('2027-06-01');
const date2 = new Date('2027-06-10');
const difference = getDateDifference(date1, date2);
console.log(difference); // 9

function getDateDifference(date1, date2){
 const date = new Date(date2 - date1)
 return date.getDay()
}

