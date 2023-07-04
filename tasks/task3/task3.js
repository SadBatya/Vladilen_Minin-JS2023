const fullName = "John Doe";
const initials = getInitials(fullName);

function getInitials(str){
  let newInitials = []
  for(let char of str){
    if(char === char.toUpperCase() && char !== ' '){
      newInitials.push(char + '.')
    }
  }
  return newInitials.toString().replace(',',' ')
}



console.log(initials); // "J. D."
