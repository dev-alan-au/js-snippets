const asPromised = new Promise((res) => {
  res(30);
});
const asValue = 31;
const asThenable = {
  then: (cb) => cb(32),
}; // slow
const hasError = Promise.reject(33);

// Promise.resolve all and return promise with the results
Promise.all([asPromised, asValue, asThenable]).then((fulfilled) => {
  console.log(fulfilled); // [ 30, 31, 32 ]
});

Promise.all([]).then((fulfilled) => {
  console.log(fulfilled); // []
});

Promise.all([asPromised, asValue, hasError]).then(
  (fulfilled) => {
    console.log("all fullfilled");
    console.log(fulfilled);
  },
  (rejected) => {
    console.log("first rejected");
    console.log(rejected);
  }
);

// Promise.race gets first
Promise.race([asThenable, asPromised]).then((first) => console.log({ first })); // { first: 30 }
Promise.race([asThenable, asValue]).then((first) => console.log({ first })); // { first: 31 }
Promise.race([asThenable, hasError]).then(
  (first) => console.log({ first }),
  (error) => console.log({ error })
); // { error: 33 }

Promise.race([asPromised, asValue, asThenable, hasError]).then(
  (firstAgain) => console.log({ firstAgain }),
  (error) => console.log({ error })
); // { firstAgain: 30 } -- even if error would return

function resolveWithTimeout(v, delay) {
  return new Promise((res) => {
    setTimeout(() => res(v), delay);
  });
}

function rejectWithTimeout(v, delay) {
  return new Promise((_, rej) => {
    setTimeout(() => rej(v), delay);
  });
}

// if API takes too long...
Promise.race([resolveWithTimeout(32, 1000), rejectWithTimeout(33, 50)]).then(
  (fulfilled) => {
    console.log("Fulfilled", fulfilled);
  },
  (rejected) => {
    console.log("Rejected", rejected); // Rejected 33
  }
);

// Promise.allSettled executes all even errors
Promise.allSettled([asPromised, asValue, asThenable, hasError]).then(
  (fulfilled) => {
    console.log("allSettled");
    console.log(fulfilled);
  },
  (rejected) => {
    console.log("allSettled");
    console.log(rejected);
  }
);

// [
//   { status: 'fulfilled', value: 30 },
//   { status: 'fulfilled', value: 31 },
//   { status: 'fulfilled', value: 32 },
//   { status: 'rejected', reason: 33 }
// ]
