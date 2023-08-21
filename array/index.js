const arr1 = [1, 2, 3, 4, 5, 6, undefined];
arr1.false = "I'm false";
arr1.cat = "I'm cat";

// key coerced to string
console.log(arr1[1]); // 1 is coerced to string "1"
console.log(arr1["1"]); // same as above will result in 2
console.log(arr1[false]); // I'm false...
console.log(arr1["cat"]); // I'm false...
console.log(arr1.length); // 7 - false and cat are not included

arr1[2] = 7;
delete arr1[4]; // array becomes "sparce"

console.log("delete fifth slot"); // 6 - "false is not included"
console.log(arr1.length); // 7

for (const key in arr1) {
  // The empty slot is different from the undefined value, and the most important difference is that the empty slot is not Enumerable.
  // does not print undefined slot
  console.log(key, arr1[key]);
  // 0 1
  // 1 2
  // 2 7
  // 3 4
  // 5 6
  // 6 undefined
  // false I'm false
  // cat I'm cat
}

for (let i = 0; i < arr1.length; i++) {
  console.log(i, arr1[i]);

  // 0 1
  // 1 2
  // 2 7
  // 3 4
  // 4 undefined
  // 5 6
  // 6 undefined
}

const arr2 = [];
arr2[5] = 4;
delete arr2[5];
arr2.name = "Johnny"; // won't appear in for...of

// for arrays "for...of" iterates slots
for (const prop of arr2) {
  // for..of calls the Array iterator method, which is described in the spec.
  // (2) Let iterator be ObjectCreate(%ArrayIteratorPrototype%, «‍[[IteratedObject]], [[ArrayIteratorNextIndex]], [[ArrayIterationKind]]»).
  // (4) Set iterator’s [[ArrayIteratorNextIndex]] internal slot to 0.

  console.log(prop);

  // undefined
  // undefined
  // undefined
  // undefined
  // undefined
  // undefined
}

// .reduce, .filter, and some other methods also skip empty slots. Here are our tips to avoid arrays with empty slots:

// Always use .fill after calling new Array(someSize).
// Don't write to indexes past the end of an array.

arr2[0] = "Okay!";
console.log(arr2.length); // 6
arr2.forEach((val) => console.log(val)); //only "Okay!" is printed
arr2.map((val) => {
  console.log(val);
  return val;
}); //only "Okay!" is printed

arr2.fill(undefined);
arr2[0] = "Okay!";
arr2.forEach((val) => console.log(val));
// Okay!
// undefined
// undefined
// undefined
// undefined
// undefined

arr2.map((val) => {
  console.log(val);
  return val;
});
// Okay!
// undefined
// undefined
// undefined
// undefined
// undefined

const arr3 = ["me", "myself", "and", "i"];
console.log(arr3.at(1)); // me
console.log(arr3.at(-1)); // i - reverse order
