const a = {
  then: (cb) => cb(2),
};

const promiseA = Promise.resolve(a);

promiseA
  .then((fulfilled) => {
    console.log("as fulfilled");
    return Promise.reject(fulfilled);
  })
  .then(null, (err) => {
    console.log(err);
  });

promiseA
  .then((fulfilled) => {
    console.log("as rejected");
    return Promise.reject(fulfilled);
  })
  .catch((err) => {
    console.log(err);
  });

const b = {
  then: (cb) => cb(Promise.reject("Rej")),
};

const promiseB = Promise.resolve(b);
console.log(promiseB); // Promise { <pending> }

promiseB.then(null, (rej) => console.log(rej)); // rejected from the unwrapping

const c = {
  then: (cb) => cb(4),
};
const promiseCRes = new Promise((res, _) => res(c)); // 4
const promiseCRej = new Promise((_, rej) => rej(c)); // will throw if there is no code to catch (or use then):
// [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "#<Object>".] {
//   code: 'ERR_UNHANDLED_REJECTION'
// }

promiseCRes.then((fulfilled) => console.log({ fulfilled })); // { res: 4 } -- this is unwrapped
promiseCRej.then(null, (rejected) => console.log({ rejected })); // { rej: { then: [Function: then] } } -- this is not unwrapped

// can catch and continuer
Promise.reject("No")
  .catch((err) => {
    console.log(err);
    return "Yes";
  })
  .then((fulfilled) => console.log(`The answer is ${fulfilled}`));

// can catch and continuer
Promise.resolve("Yes")
  .catch((err) => {
    console.log(err);
    return "No";
  }) // no rejection or err so continue
  .then((fulfilled) => console.log(`The answer is ${fulfilled}`));
