function debounce(func, timeout = 100) {
  let timer;
  return (...args) => {
    if (!timer) {
      func.apply(Object.create(null), args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}

module.exports = debounce;
