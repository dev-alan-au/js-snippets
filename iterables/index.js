// IIFE returns an object that has a function with closure over scope
const iterable = (() => {
  let currentVal; // persisted state

  return {
    [Symbol.iterator]: function () {
      return this;
    },
    next: function () {
      if (!currentVal) {
        currentVal = 1;
      } else {
        currentVal++;
      }
      return { done: false, value: currentVal };
    },
  };
})();

console.log(iterable.next().value); // 1
console.log(iterable.next().value); // 2
console.log(iterable.next().value); // 3

console.log(iterable[Symbol.iterator]); // this is needed for for...of

for (const n of iterable) {
  // gets the value of .next
  console.log(n); // 4 5 6
  if (n > 5) break;
}

// can also be used for 'for' loop
for (let ret; (ret = iterable.next()) && !ret.done; ) {
  console.log(ret.value); // 7 8 9 10
  if (ret.value > 10) break;
}

const arr = [1, 2, 3, 4, 5];
console.log(arr[Symbol.iterator]);
const arrIterator = arr[Symbol.iterator](); // function returns iterator
const arr0 = arrIterator.next();
console.log(arr0); // { value: 1, done: false }
