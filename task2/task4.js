function sayHello(name){
  if(!name){
    return console.log('Hello, someone')
  }else{
    return console.log(`Hello, ${name}`)
  }
}

sayHello('Vladimir')