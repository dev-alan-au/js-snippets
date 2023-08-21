function passMeArgs() {
  return (...args) => {
    console.log(args);
  };
}

function executeWithArgs(fn) {
  return function (...args) {
    fn.apply(this, args);
  };
}

function executeWithArgsArrow(fn) {
  return (...args) => {
    fn.apply(this, args);
  };
}

const caller1 = passMeArgs();
caller1(123, 4456);

function Dog() {
  this.name = "Billy";
  this.bark = function bark(args) {
    console.log(this.name + " bow wow " + args);
  };
}

const billy = new Dog();

billy.bark("canine"); // this ref Billy
const caller2 = executeWithArgs(billy.bark);
caller2("dawg"); // we lost Billy!
const caller3 = executeWithArgs(billy.bark).bind(billy); // need to rebind Billy
caller3("dog");
const caller4 = executeWithArgsArrow(billy.bark).bind(billy); // we lost Billy again
caller4("doggo");
