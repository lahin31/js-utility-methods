/**
 * size lodash method's native implementation
 */

const arr = [1, 2, 3];
const obj = { a: 1, b: 2 };
const text = "javascript";

const size = collection => {
  if (collection && collection.constructor === Object) {
    return Object.keys(collection).length;
  }
  return collection.length;
};

console.log(size(arr)); // 3
console.log(size(obj)); // 2
console.log(size(text)); // 10
