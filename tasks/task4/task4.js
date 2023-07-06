class Animal {
  constructor(name, favoriteFood) {
    this.name = name;
    this.favoriteFood = favoriteFood;
  }

  makeSound() {
    console.log("Animal sound");
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }

  sayInfo() {
    console.log(`${this.name}'s favorite food is ${this.favoriteFood}`);
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Gav!");
  }
}