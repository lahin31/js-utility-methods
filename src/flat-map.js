/**
 * lodash flatMap native implementation
 */

let arr = [1, 2];

function duplicate(n) {
  return [n, n, n];
}

function flatMap(arr) {
  return arr.map((item) => duplicate(item)).flat();
}

console.log(flatMap(arr)); // [ 1, 1, 1, 2, 2, 2 ]
