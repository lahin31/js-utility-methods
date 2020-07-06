/**
 * union lodash method's native implementation
 */

const arr1 = [2];
const arr2 = [1, 2];
const result = [...arr1, ...arr2];

console.log([...new Set(result)]); // [2, 1]
