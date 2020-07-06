/**
 * lodash concat method's native implementation
 */

const arr1 = [1];
const arr2 = [2, 3, [4, 5]];

const result = [...arr1, ...arr2]; // es6 spread operator
console.log(result); // [ 1, 2, 3, [ 4, 5 ] ]
