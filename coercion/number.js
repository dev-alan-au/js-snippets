// parseInt coerces arguments as string first
// 1/0 evaluates to 'Infinity' and base-19 'I' coerces to 18
console.log(parseInt(1 / 0)); // NaN
console.log(parseInt(1 / 0, 19)); // 18
console.log(parseInt([])); // NaN
console.log(parseInt([1, 2, 3])); // 1 - toString joins with ','
const arr = ["1", "2", "3"];
arr.toString = function () {
  return this.join("");
};
console.log(arr.toString()); // "123"
console.log(parseInt(arr)); // 123
console.log(parseInt("12px")); // 12 - parses up to p

// parseFloat
console.log(parseFloat("0.000014")); //0.00014
console.log(~-1); //0 - bit-wise negation essentially -(x+1) useful for -1 results e.g. find
console.log(~-49.6); //48 - truncates to 32 bit integer
console.log(~~-49.6); //49
console.log(Math.floor(-49.6)); //50 - not same as Math.floor
console.log(+"123"); //123 - + operator coerces into number

// Number coerces arguments to number
console.log(Number(1 / 0)); // Infinity
console.log(Number("12px")); // NaN - identifies that this is not a number

// global / window isNaN vs Number.isNan
console.log(NaN == NaN); // false - NaN is not equal to anything
console.log(isNaN("NaN")); // true - evaluates expression and determines is not a number
console.log(Number.isNaN("NaN")); // false - identifies it is a string
console.log(Number.isNaN(NaN)); // true - identifies it is literally NaN

// bitwise or |
//The bitwise OR (|) operator returns a number or BigInt whose binary representation has a 1 in each bit position for which the corresponding bits of either or both operands are 1.
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

// Expected output: 7
console.log(a | b); // 00000000000000000000000000000111

//According to the ES5 spec, when doing bitwise operations, all operands are converted to ToInt32 (which first calls ToNumber. If the value is NaN or Infinity, it's converted to 0).
// can be used to eval to 0
console.log(0 | -0); //0
console.log(0 | NaN); //0
console.log(0 | Infinity); //0
console.log(0 | -Infinity); //0
