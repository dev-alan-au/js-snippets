// Destructuring
const obj1 = { a: 1, b: 2, c: 3 };
const { a: a, b: b, c: c } = obj1; // same as { a, b, c } = obj1;

console.log(a, b, c); // 1 2 3

const { a: a1, b: b1, c: c1 } = obj1;
console.log(a1, b1, c1); // 1 2 3

let d, e, f;
({ a: d, b: e, c: f } = obj1); // need parathesis

console.log(d, e, f); // 1 2 3

// Spread
console.log({ ...obj1 }); // { a: 1, b: 2, c: 3 }
