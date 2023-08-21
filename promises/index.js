const n = Math.random();
console.log(n);
const p1 = new Promise((res, rej) => {
  if (n > 0.5) res(console.log("yup"));
  else {
    // rej(new Error("Rejected"));
    rej(0);
  }
});

p1.then((res) => {
  console.log(`res ${res}`);
}).catch((err) => {
  console.log(err);
  // console.log(err.message);
});

console.log(a);
var a = 8;

// callbacks are in order but best not to rely on scheduling/order
const p2 = Promise.resolve(5);
p2.then(() => {
  console.log("A");
  p2.then(() => {
    console.log("C");
  });
  p2.then(() => {
    console.log("D");
  });
}).finally(() => {
  console.log("E"); // fires when chain is complete
});

p2.then(() => {
  console.log("B");
  p2.then(() => {
    console.log("F");
  });
}); // A B C D E F

// race condition - who will win?
const timeoutPromise = new Promise((_, rej) => {
  setTimeout(() => rej("Timed out!"), 100); // will win if Math.rand * 200 is greater than 100ms
});

const erroredPromise = new Promise((res, rej) => {
  const rand = Math.random();
  setTimeout(() => {
    if (rand > 0.3) {
      res("Done!");
    } else {
      rej("Not done!");
    }
  }, rand * 200);
});

Promise.race([timeoutPromise, erroredPromise]).then(
  (fulfilled) => {
    console.log(fulfilled);
  },
  (rejected) => {
    console.log(rejected);
  }
);

// access to scope
function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log(`My name is ${this.name}`);
};

const p3 = new Promise((res) => {
  const fred = new Person("Fred");
  res(fred);
});

p3.then((fulfilled) => {
  fulfilled.printName(); // My name is Fred
});

// errors
const p4 = new Promise((res) => {
  res(fred); // what is fred doing here??
});

p4.then(
  () => {},
  (rej) => {
    console.log(rej); // ReferenceError: fred is not defined
  }
);

const p5 = new Promise((res) => {
  fred.name = "Ed"; // what is fred doing here??
  res(1); // res doesn't fire
});

p5.then(
  () => {},
  (rej) => {
    console.log(rej); // ReferenceError: fred is not defined
  }
).catch(() => {
  console.log("Error found!"); // error was not caught in rejection handler so this is skipped
});

p5.then(() => {}).catch(() => {
  console.log("Error found!"); // error was not caught in rejection handler
});

// Promise.resolve returns the original promise, wraps a value in a promise or unwrap a thenable obj and wrap into a promise
const asPromised = Promise.resolve(
  new Promise((res) => {
    res(32);
  })
);
const asValue = Promise.resolve(32);
const asThenable = Promise.resolve({
  then: (cb) => cb(32), // passing 32 to callback
});
console.log("asPromised", asPromised); // Promise { 32 }
console.log("asValue", asValue); // Promise { 32
console.log("asThenable", asThenable); // Promise { <pending> } - normalise

asPromised.then((v) => console.log(v)); // async 32
asValue.then((v) => console.log(v)); // async 32
asThenable.then((v) => console.log(v)); // async 32 eventually...

// values returned from .then is a promise
Promise.resolve(1)
  .then((res) => {
    return res + 1;
  })
  .then((res) => {
    return res * 2;
  })
  .then((res) => {
    console.log(`Res is now ${res}`);
  })
  .then((res) => {
    console.log(`What is res now? ${res}`); // undef
  })
  .then(() => {
    console.log(`Does this fire? Yes`); // yes
  });

// same as
const firstRes = Promise.resolve(2).then((res) => {
  return res + 1;
});

console.log({ firstRes }); // { firstRes: Promise { <pending> } }

const secondRes = firstRes.then((res) => {
  console.log({ firstRes }); // { firstRes: Promise { 3 } }

  return res * 2;
});

console.log({ secondRes }); // { secondRes: Promise { <pending> } }

const thirdRes = secondRes
  .then((res) => {
    console.log(`Res is now ${res}`);
  })
  .then((res) => {
    console.log(`What is res now? ${res}`); // undef
  })
  .then(() => {
    console.log(`Does this fire? Yes`); // yes
  });

console.log({ thirdRes }); // { thirdRes: Promise { <pending> } }

// chaining possible because then returns a promise
const p6 = new Promise((res) => {
  res(1);
});

const p7 = p6.then((fulfilled) => {
  return fulfilled;
});

console.log({ p7 }); // { p7: Promise { <pending> } }
