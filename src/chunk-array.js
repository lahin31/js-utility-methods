/**
 * lodash chunk-array method's native implementation
 */

let arr = ["a", "b", "c", "d", "e"];

function chunk(arr, size) {
  return Array.from(
    {
      length: Math.ceil(arr.length / size), // will create chunk containing undefined
    },
    (_, i) => arr.slice(i * size, i * size + size)  // updating each index with slice
  );
}

console.log(chunk(arr, 2)); // [ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e' ] ]
console.log(chunk(arr, 1)); // [ [ 'a' ], [ 'b' ], [ 'c' ], [ 'd' ], [ 'e' ] ]
