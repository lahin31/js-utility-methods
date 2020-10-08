/**
 * lodash pullAll method's native implementation
 */

const array = ["a", "b", "c", "a", "b", "c"];

const pullAll = (arr, values) => {
  return arr.filter(item => !values.includes(item));
};

console.log(pullAll(array, ["a", "c"])); // [ 'b', 'b' ]
