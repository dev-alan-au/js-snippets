// lexical scope
a = 3;

// var declaration gets hoisted
// since function declaration exists with same name, re-declaration of 'a' is ignored
var a;
console.log(a); // 3

// function declarations are hoisted first
function a() {
  console.log(a);
}

try {
  a();
} catch (e) {
  // console.log(e)
  // TypeError: a is not a function
  // catch creates a new scope
  var b = e;
}

console.log(this.a); // undefined in node but 3 in browser

global.a = 2;
console.log(this.a == global.a); // they're not the same in nodejs
console.log(this.a == a);
console.log(global.a == a); // 3 in node

console.log(this); // in node this is {} as nothing is exported from node module yet

console.log(a); // is 3

// console.log(e);
// ReferenceError: e is not defined

// console.log(b);
// TypeError: a is not a function
// b is hoisted into global scope

console.log(global.a) // undefined in node and no global obj in browser

// ; // syntax error occurs when semi-colon is not present in front of IIFE

// In order for the function to be parsed as an expression, the function keyword has to appear at a position that only accepts expressions, not statements.
// void operation evals to true undefined
// void operator signifies IIFE is a

void (function logThisAInStrictMode() {
  "use strict";
  // console.log(this.a);
  // Cannot read properties of undefined (reading 'a')
})();

// In nodeJS in the outermost scope of a module the value of this is the current module.exports object.
module.exports.a = {b: 2}
console.log(this.a) // { b: 2 }
console.log(this) // { b: 2 }