console.log("Step 1"); // we start here

const p1 = new Promise((res) => {
  console.log("Step 2"); // we begin executing this block
  setTimeout(() => {
    res("5");
  }, 100);
});

console.log(p1); // Promise { <pending> }

console.log("Step 3"); // we continue to this block

p1.then((res) => console.log(`Step ${res}`)); // gets moved to job queue

console.log("Step 4");

p1.then((res) => {
  console.log(typeof res);
  console.log(`Step ${res}`); // gets moved to job queue
  console.log(p1); // Promise { '5' }
});

setTimeout(() => {
  console.log("World");
}, 0); // timer will add to next tick when timeout duration has passed and fires after job queue
const p2 = Promise.resolve("Hello");
p2.then((res) => console.log(res)); // job queue hangs off event loop so fires before next tick
