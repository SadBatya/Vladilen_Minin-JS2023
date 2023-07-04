

function generateGoogleString(number){
  let word = 'Google'
  for(let symbol of word){
    return symbol
  }
}


console.log(generateGoogleString(4));
// Goooogle

console.log(generateGoogleString(0));
// Google

console.log(generateGoogleString(-2));
// Google

generateGoogleString