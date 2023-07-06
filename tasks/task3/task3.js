const targetDate = new Date('2027-12-31T23:59:59');
// const timeUntilTargetDate = getTimeUntilDate(targetDate);


function getTimeUntilDate(date){
  let newDate = targetDate - Date.now()
  let difDate = new Date(newDate)
  let hours = difDate.getHours()
  let days = difDate.getDay()
  let minutes = difDate.getMinutes()
  let seconds = difDate.getSeconds()

  return console.log(`days: ${days}, hours: ${hours}, minutes:${minutes}, seconds:${seconds}`)
}

getTimeUntilDate() // { days: 100, hours: 20, minutes: 45, seconds: 31 }

