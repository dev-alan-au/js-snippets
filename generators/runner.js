function runner(gen) {
  const itr = gen.apply(this, [].slice.call(arguments, 1));

  return (function handleNext(val) {
    const next = itr.next(val);
    if (next.done) {
      console.log("done", next.value);
    } else {
      handleNext(next.value * 2);
    }
  })();
}

function* generator() {
  const a = yield 5;
  const b = yield a;
  const c = yield b;

  return c + ""; // exit and return as string
}

runner(generator);
