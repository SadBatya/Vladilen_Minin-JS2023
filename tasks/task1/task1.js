function calculateAge(birtDate){
  return console.log(Math.round((Date.now() - birtDate)/86400000/365))
}

const birthDate = new Date('1990-05-20');
const age = calculateAge(birthDate);