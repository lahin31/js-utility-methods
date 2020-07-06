/**
 * lodash nth method
 * Gets the element at index n of array. If n is negative, the nth element from the end is returned.
 */

const array = ["a", "b", "c", "d"];

const nth = (arr, n) => {
  if (Math.sign(n) === 1 || Math.sign(n) === 0) return arr[n];
  else return arr[arr.length + n];
};

console.log(nth(array, 1)); // b
console.log(nth(array, -1)); // d
console.log(nth(array, -2)); // c
console.log(nth(array, 0)); // a
