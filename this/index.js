function setName(name) {
  this.name = name;
}

function selfIntroduction() {
  console.log(`Hello my name is ${this.name}`);
}

// This is determined by call-site
// 1. 'new' keyword returning obj with this ref
// 2. Explicit / hard binding using call or apply (params or array)
// 3. Implicit binding called by obj
// 4. Default binding of undef or global / window

function Person(name) {
  this.name = name;
}
// prototype obj is available to all functions not just instatiations with new
Person.prototype.selfIntroduction = selfIntroduction;
function really() {}
console.log(`really.prototype ${really.prototype}`);

// 1. 'new' operator
//  a. Creates new obj
//  b. Points newInstance's [[Prototype]] to the constructor function's prototype property
//  c. Executes the constructor function with the given arguments, binding newInstance as the 'this' context
//  d. If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression
const Aran = new Person("Aran");
Aran.selfIntroduction();

// 2. Hard bind
const Steve = {};
// call setName passing Steve as 'this'
const setSteveName = setName.bind(Steve);
setSteveName("Steve");
selfIntroduction.call(Steve);

// 3. Implicit binding with 'this' referencing obj invoking function
const Stacey = {
  name: "Jeff",
  setName: (name) => (this.name = name),
  selfIntroduction: function () {
    console.log(`Stacey: ${this.name} here`);
  },
  selfIntroductionWithArrayFn: () => {
    console.log(this);
    console.log(`Stacey: ${this.name} here`);
  },
  logThis: () => {
    console.log(`Logging this: ${this}`);
  },
};

Stacey.selfIntroduction();
// oops... 'this' is lost
module.exports.default = { name: "Ted" }; // similar to window.name = "Ted";
Stacey.selfIntroductionWithArrayFn(); //would be "Ted" in browser
Stacey.logThis();
// console.log(Stacey);

// Stacey.selfIntroduction();
// Stacey.selfIntroductionWithArrayFn();
// Stacey.setName("Josh");
// Stacey.selfIntroductionWithArrayFn();

class Student {
  constructor(name) {
    this.name = name;
  }

  selfIntroductionWithArrayFn = () => {
    // this points to current obj
    console.log(`${this.name} here`);
  };

  // auto return {} with a this ref to the obj created
}

const Conrad = new Student("Conrad");
Conrad.selfIntroductionWithArrayFn();

// 4. Implicit as global
// set name in global
setName("Alan");
// call function with global
selfIntroduction();
