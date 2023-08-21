const a = ["1", "2", "3"];
const b = { a: 1, b: 2 };

// even though objects are truthy they are not equal in reference value
console.log(a == b);
false;

// array converts to string for comparison
console.log(a.toString() == "1,2,3"); // true
console.log(a == a.toString()); // true

console.log(b.toString() == "[object Object]"); //true
console.log(b == b.toString()); //true

const c = "string";
const d = Object(c); // wrap with String
const e = Object(c); // wrap with String
console.log(c == d); // true as valueOf d is same as "string"
console.log(d == e); // false as comparison of reference value

// using array to call Object function
const arr = [1, 2, 3];
console.log(Object.prototype.toString.call(arr)); // "[object Array]"
