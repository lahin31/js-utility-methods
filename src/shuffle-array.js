/**
 * shuffle lodash method's native implementation
 */

let arr = [6, 1, 3, 4, 5, 2];

arr.sort(() => Math.random() - 0.5); // for further information https://javascript.info/task/shuffle

console.log(arr); // [ 6, 4, 1, 2, 5, 3 ]
