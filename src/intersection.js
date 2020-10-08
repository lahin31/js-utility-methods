/**
 * intersection lodash method's native implementation
 */

let arr1 = [2, 1];
let arr2 = [2, 3];

const intersection = (arr1, arr2) => {
  return arr1.filter(val => arr2.includes(val));
};

console.log(intersection(arr1, arr2)); // [ 2 ]
