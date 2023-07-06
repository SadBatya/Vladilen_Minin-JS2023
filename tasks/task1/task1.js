class Circle{
  constructor(radius){
    this.radius = radius
  }

  getArea(){
    return Math.round(Math.PI * this.radius ** 2)
  }
}

const circle = new Circle(5)
console.log(circle.getArea())