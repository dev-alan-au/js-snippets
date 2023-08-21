// THUNK: The word "thunk" is a programming term that means "a piece of code that does some delayed work". Rather than execute some logic now, we can write a function body or code that can be used to perform the work later.

const doSomething = (task, duration, cb) => {
  console.log(`Starting ${task}`);

  setTimeout(() => {
    cb(`Completed ${task}`);
  }, duration);
};

// order not guaranteed but could solve with gate
// doSomething("Task 1", 2000, (res) => console.log(res));
// doSomething("Task 2", 1000, (res) => console.log(res));

// order guaranteed but executed in serial
// doSomething("Task 1", 2000, (res) => {
//   console.log(res);
//   doSomething("Task 2", 1000, (res) => console.log(res));
// });

const doSomethingWithThunk = (task, duration) => {
  let data, fn;
  console.log(`Starting ${task}`);

  setTimeout(() => {
    data = `Completed ${task}`;
    if (fn) {
      //if we get cb first
      console.log(`fn is called`);
      fn(data);
    }
  }, duration);

  // return function with closure over data and fn
  return function (cb) {
    if (data) {
      // if we get data first
      console.log(`data is called`);
      cb(data);
    } else {
      // data is not ready but lets set cb as function to execute when ready
      fn = cb;
    }
  };
};

const task1 = doSomethingWithThunk("Task 1", 2000);
const task2 = doSomethingWithThunk("Task 2", 1000);

// exec order still determined by completion order
// task1((res) => console.log(res));
// task2((res) => console.log(res));

// parallel (concurrent) execution with ordered results
task1((result1) => {
  console.log(result1);
  task2((result2) => console.log(result2));
});
