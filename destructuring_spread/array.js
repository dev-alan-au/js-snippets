// Destructuring
const [a, b, c] = [1, 2, 3];

console.log(a, b, c); // 1 2 3

// ...rest / gather at end of array
const [d, e, ...f] = [4, 5, 6, 7, 8];

console.log(d, e, f); // 4 5 [ 6, 7, 8 ]

const g = [9, 9, 9];

function sample(...args) {
  console.log(args);
}

sample(10, 11, 12); // [ 10, 11, 12 ]

// Spread
const h = [10, ...g, 10];
console.log(h); // [ 10, 9, 9, 9, 10 ]
