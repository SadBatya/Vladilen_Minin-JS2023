const john = {
  name: 'John',
  age: 25,
  pet: 'Mailo',
};

const ann = {
  name: 'Sofia',
  age: 21,
  pet: 'Judy',
};

function myInfo(obj) {
  return console.log(
    `Меня зовут ${obj.name}, мне ${obj.age}, и у меня есть питомец ${obj.pet}`
  );
}

function incrementAge(obj) {
  obj.age += 1;
}

myInfo(john); // выводим данные про первый объект

console.log(john.age); // проверяем возвраст объекта до изменения (25)

incrementAge(john); // увеличиваем возраст объекта
console.log(john.age); // выводим новый возраст (26)

myInfo(ann); // выводим информацию про второй объект

console.log(john); // { name: 'John', age: 26, pet: 'Mailo' }
