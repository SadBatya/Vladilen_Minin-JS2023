const person = {
  name: 'Vladimir',
  age: 20,
  isMajor: false,
  languages: ['ru', 'kz'],
  address:{
    city: 'Karaganda',
    street: 'Erzshanova'
  },
  'complex key': 'complex',
  ['key_' + 21 + 2]: 'computed value', 
  greet(){
    return console.log('Hello World!')
  },
  arrow: () => {
    console.log('Person Arrow')
  },
  info(){
    console.log('person name', this.name)
  }
}

console.log(person)
person.greet()
person.arrow()
person.info()


class Person{
  constructor(name,age){
    this.name = name ?? 'имя неизвестно'
    this.age = age
  }
}

const newPerson = new Person('',25)
console.log(newPerson)