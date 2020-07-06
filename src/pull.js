/**
 * lodash pull method's native implementation
 */
const array = ["a", "b", "c", "a", "b", "c"];

const pull = (arr, ...values) => {
  return arr.filter((item) => !values.includes(item));
};

console.log(pull(array, "a", "c")); // [ 'b', 'b' ]
