const obj1 = {
  a: 1,
  fn() {
    console.log(this.a);
  },
};

obj1.fn();
obj1.fn.apply(Object.create(null)); // undef as global does not have `a` prop

const obj2 = {
  a: 2,
  fn: () => {
    console.log(this.a);
  },
};

obj2.fn(); // undef as no binding for `this`

const obj3 = {
  a: 3,
  fn() {
    return () => console.log(this.a);
  },
};

obj3.fn()(); // 3 - `this` is bound to `fn` scope

function outer1() {
  this.a = 4;

  const obj4 = {
    fn: () => {
      console.log(this.a);
    },
  };

  return obj4.fn;
}

outer1()(); // 4 - `this` is bound to outer scope
outer1().bind({ a: 5 })(); // 4

function outer2() {
  this.a = 4;

  const obj4 = {
    fn() {
      console.log(this.a);
    },
  };

  return obj4.fn;
}

outer2().bind({ a: 5 })(); // 5 - fn is `this` aware
