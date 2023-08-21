// vars are hoisted by not initialised

// a = 1; // Cannot access 'a' before initialization

let a;

for (var i = 0; i < 5; i++) {
  m = i;
  setTimeout(() => {
    console.log(i); // logs 5, 5, 5, 5, 5 as loop completes before console logs execute
  }, 0);
}

let j;
// k becomes 10 when statement is false
for (var k = 0; k < 10; k++) {
  j = k;  
}

console.log(`j: ${j}`); // 9 - last execution of block
console.log(`k: ${k}`); // 10 - incremented in head

for (let n = 1; n < 3; n++) {
  m = n;
  // value of n is re-initialised to this scope each time
  n++; // this value becomes the next value of n is re-initialised
  // n becomes 2 and then third statement of for head increments again to 3
  // when n is 3 loop no longers satisfies second statement
  console.log(`what is n? ${n}`);
}

for (let i = 0; i < 5; i++) {
  m = i;
  setTimeout(() => {
    console.log(i); // logs 0, 1, 2, 3, 4 as loop completes before console logs execute
  }, 0);
}

var array = [1, 2, 3, 4, 5];
for (var n = 0; n < array.length; n++) {
  setTimeout(() => {
    console.log(array[n]); // undefined because n becomes 5 and is an undefined value
  }, 1000);
}
console.log(`n: ${n}`);
