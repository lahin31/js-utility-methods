/**
 * tail lodash method's native implementation
 */

const arr = [1, 2, 3];

const tail = (arr, n = 1) => {
  return arr.filter((_, index) => index < n);
};

console.log(tail(arr, 1)); // [1]
console.log(tail(arr)); // [1]
console.log(tail(arr, 2)); // [ 1, 2 ]
console.log(tail(arr, 0)); // []
