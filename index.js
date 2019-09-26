const pi = Math.PI

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius*2
  }

  set diameter(diameter) {
    this.radius = diameter/2
  }

  get circumference() {
    return (this.radius*2) * pi
  }

  set circumference(circumference) {
    this.radius = circumference/(pi*2)
  }

  get area() {
    return pi * (this.radius*this.radius )
  }

  set area(area) {
    this.radius = Math.sqrt(area/pi)
  }
}

//----------------------------- Notes --------------------------------------------

//The get keyword turns a method into a 'pseudo-property', that is - it allows us to write a method that interacts like a property.
//To change data, we have set.The set keyword allows us to write a method that interacts like a property being assigned a value. By adding it in conjunction with a get, we can create a 'reassignable' pseudo-property.