/**
 * lodash dropRight method's native implementation
 */

const values = [1, 2, 3];

function dropRight(arr, n = 1) {
  return arr.filter((_, index) => index < arr.length - n);
}

console.log(dropRight(values, 2)); // [1]
console.log(dropRight(values, 1)); // [1, 2]
console.log(dropRight(values, 0)); // [1, 2, 3]
console.log(dropRight(values)); // [1, 2]
