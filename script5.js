// Strategy Pattern

// a way to encapsulate different algorithms or functions and then at
//     runtime practically use the same code to run different scenarios.

// a temporary state of your data retaining the info while being converted
//     from one format to another

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

// we're encapsulating code by creating a class (or function or anything)
class SUV extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    this.wheels = 4;
  }
}

// we're resuing that code multiple times to create new objects
const civic = new Car(4, "V6", "grey");
const cx5 = new SUV(4, "V8", "red");

console.log(civic);
console.log(cx5);
