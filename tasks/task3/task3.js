class Person{
  arr = []

  addFriend(name){
    this.arr.push(name)
  }

  showFriends(){
    console.log(this.arr)
  }
}

const person = new Person();
person.addFriend("Иван");
person.addFriend("Сергей");
person.addFriend("Игорь");
person.showFriends(); // Иван, Сергей, Игорь