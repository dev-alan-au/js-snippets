const obj1 = {
  name: "Jeff",
  printName() {
    console.log(`My name is ${this.name}`);
  },
  setName(name) {
    this.name = name;
  },
};

const obj2 = {
  name: "Leslie",
};

// functions don't really belong an obj
obj1.printName.call(obj2);

// create an obj referencing obj1 as prototype
const obj3 = Object.create(obj1);
console.log(Object.getPrototypeOf(obj3) == obj1); // true
obj3.printName(); // Jeff
obj3.setName("Daniel");
obj3.printName(); // Daniel

function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log(`Printing name: ${this.name}`);
};

const Alex = new Person("Alex");
Alex.printName(); // Printing name: Kelly

function Teacher(name, year) {
  this.name = name;
  this.year = year;

  this.printProfession = () => {
    console.log("I'm a teacher");
  };
}

// extend person
Teacher.prototype = Object.create(Person.prototype);
// add new function to Teacher.prototype
Teacher.prototype.printYear = function () {
  console.log(`Printing year: ${this.year}`);
};

const Kelly = new Teacher("Kelly", "2010");
// Teacher has access to printName via behavioural delegation
Kelly.printName(); // Printing name: Kelly
Kelly.printYear(); // Printing year: 2010
Kelly.printProfession(); // I'm a teacher
// Alex.printYear(); // Alex.printYear is not a function

const Jonathan = new Teacher("Jonathan", "1999");
// They are not referencing the same function
console.log(Jonathan.printProfession == Kelly.printProfession); // false
// They are referencing the same function
console.log(Jonathan.printName == Kelly.printName); // true

class Vehicle {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  printModel = () => {
    console.log(`Model: ${this.model}`);
  };

  printYear() {
    console.log(`Make year: ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(model, year, color) {
    super(model, year);
    this.color = color;
  }

  printColor() {
    console.log(`Color: ${this.color}`);
  }
}

const Civic = new Car("Civic", "1998", "red");
const Is200 = new Car("Is200", "2005", "blue");

Civic.printColor(); // access to car methods
Is200.printYear(); // access to vehicle methods
console.log(Civic.printColor == Is200.printColor); // they are the same!

function Vehicle(name) {
  this.name = name;
}

function Car(name) {
  this.name = name;
  this.color = "red";

  this.getMyColor = function () {
    console.log(this);
    return this.color;
  };

  return {
    name: this.name,
    getName: this.getName,
    getColor: this.getColor,
    getMyColor: this.getMyColor,
  };
}

Vehicle.prototype.getName = function () {
  return this.name;
};

Vehicle.prototype.getColor = function () {
  return this.color;
};

Car.prototype = Object.create(Vehicle.prototype);

const Mazda = new Car("Mazda");
console.log(Object.getPrototypeOf(Car.prototype));

for (let propKey in Mazda) {
  console.log(propKey); // getName from prototype
}

console.log(Mazda.name); // Mazda
console.log(Mazda.getName()); // Mazda
console.log(Mazda.getColor()); // undefined because property is a private member
console.log(Mazda.getMyColor()); // undefined because property is a private member
