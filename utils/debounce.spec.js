jest.useFakeTimers();
const debounce = require("./debounce");

describe("debounce", () => {
  it("should increment number only once", () => {
    let count = 1;
    function incrementCount() {
      count += 1;
    }

    const debouncedIncrement = debounce(incrementCount, 100);
    debouncedIncrement();
    debouncedIncrement();
    debouncedIncrement();

    expect(count).toBe(2);
  });

  it("should increment number only twice", () => {
    let count = 1;
    function incrementCount() {
      count += 1;
    }

    const debouncedIncrement = debounce(incrementCount, 100);
    debouncedIncrement();
    debouncedIncrement();

    setTimeout(() => {
      debouncedIncrement();
      expect(count).toBe(2);
    }, 200);
  });

  it("should pass arguments", () => {
    let count = 1;
    function incrementCount(num) {
      count = num + count;
    }

    const debouncedIncrement = debounce(incrementCount, 100);
    debouncedIncrement(5);

    expect(count).toBe(6);
  });
});
