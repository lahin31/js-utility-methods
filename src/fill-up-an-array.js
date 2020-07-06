let arr = [1, 2, 2];

const fill = (arr, value) => arr.fill(value); // fill is a prototype method

console.log(fill(arr, "a")); // [ 'a', 'a', 'a' ]
console.log(fill(arr, 1)); // [ 1, 1, 1 ]
