/**
 * lodash pullAllBy method's native implementation
 */

let array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }, { x: 10 }];

const pullAllBy = (arr, values, identity) => {
  return arr.filter((item) => {
    if (
      values.some((it) => JSON.stringify(it) === JSON.stringify(item)) === false
    ) {
      return true;
    }
  });
};

console.log(pullAllBy(array, [{ x: 1 }, { x: 3 }], "x")); // [ { x: 2 }, { x: 10 } ]
