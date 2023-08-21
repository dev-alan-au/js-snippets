function* generator1() {
  const x = yield; // will pause here to get value of 'x' - x is a const and still can be set!
  console.log(x);
  const y = yield x ** x; // returns 5 x 5 x 5 x 5 x 5 and waits for input
  console.log(y); // 625
  return y; // returns as next value
}

const iterator = generator1();
iterator.next(); // start the generator instance - don't pass any values here
const secondIteration = iterator.next(5); // pass value back to instance of generator
const xVal = secondIteration.value; // 3125 - could chain as iterator.next(5).value
console.log(iterator.next(xVal / 5).value);

// iterator delegation
function* firstFn() {
  let x = yield 2;
  let y = x * (yield* secondFn());

  return y;
}

function* secondFn() {
  let a = yield 3;
  let b = 5 + (yield a * 5);

  return b;
}

const itr = firstFn();
const res1 = itr.next().value; // 2
const res2 = itr.next(res1).value; // 3 - jumps to secondFn
const res3 = itr.next(res2).value; // 15
const res4 = itr.next(res3).value; // 40 - back to firstFn
