export const helpers = {


  counterIncrement(setCount, count) {
    count += 1;
    setCount(count);
  },
  handleToggle(setToggle) {
    setToggle((toggle) => !toggle);
  },
};
