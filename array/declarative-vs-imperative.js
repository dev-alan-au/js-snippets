// imperative - how to do something
// declarative - what to do

const arr1 = ["Jack", "Daniel", "Kelly", "Andy"];

// loop imperative
for (let name of arr1) {
  console.log(name);

  // Jack
  // Daniel
  // Kelly
  // Andy
}

// loop declarative
arr1.forEach((name) => console.log(name));
// Jack
// Daniel
// Kelly
// Andy

// map - iterate and transform arr items then return as new arr
const capArr = arr1.map(
  (name) => name.charAt(0).toUpperCase() + name.substring(1)
);
console.log(capArr); // [ 'Jack', 'Daniel', 'Kelly', 'Andy' ]

// slice creates a new array from existing arr
const subArr1 = arr1.slice(1, 3); // end index is not included
console.log(subArr1); // [ 'Daniel', 'Kelly' ]
const subArr2 = arr1.slice(1); // to end of array
console.log(subArr2); // [ 'Daniel', 'Kelly', 'Andy' ]

// splice - mutative! returns and array from start pos and count, modifies existing arr
const arr2 = Array.from(arr1); // 'from' converts an iterable or array-like object to an array.
const person = arr2.splice(1, 1);
console.log(person, arr2); // [ 'Daniel' ] [ 'Jack', 'Kelly', 'Andy' ]
console.log(arr1); // [ 'Jack', 'Daniel', 'Kelly', 'Andy' ]

// push, pop, shift, unshift - mutative! add/remove item to/from end/start of array
const arr3 = [0, 1, 2, 3];
const lastItem = arr3.pop(); // return last item from array
console.log(lastItem, arr3); // 3 [ 0, 1, 2 ]
arr3.push(lastItem); // add item to end of array
console.log(arr3); // [ 0, 1, 2, 3 ]
const firstItem = arr3.shift(); // return first item from array
console.log(firstItem, arr3); // 0 [ 1, 2, 3 ]
arr3.unshift(firstItem); // add item to start of array
console.log(arr3); // [ 0, 1, 2, 3 ]

// reduce - iterate through array and accumulate a result
const arr4 = [
  { add: 1, remove: 2 },
  { add: 3, remove: 10 },
  { add: 30, remove: 9 },
];

const initialValue = 0;
const result = arr4.reduce((prev, curr) => {
  // prev is the accumulator
  const { add, remove } = curr;
  return prev + add - remove; // persist this value for next iteration
}, initialValue);

console.log(result); // 13
