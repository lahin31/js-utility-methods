let values = [1, 2, 3];

function drop(arr, n = 1) {
  let new_arr = [...arr];
  return new_arr.splice(n);
}

console.log(drop(values, 1)); // [ 2, 3 ]
console.log(drop(values, 2)); // [3]
console.log(drop(values, 10)); // []
console.log(drop(values, 0)); // [1, 2, 3]
