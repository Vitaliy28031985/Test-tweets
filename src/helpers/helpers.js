export const helpers = {
  count: 1,

  counterIncrement(setCount) {
      this.count += 1;
    setCount(this.count);
  },
  counterDecrement(setCount, count, maxCount) {
    this.count = count;
    if (this.count > 0) {
      this.count -= 1;
      setCount(this.count);
    } else {
      setCount(maxCount);
    }
  },
};