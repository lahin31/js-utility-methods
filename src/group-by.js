/**
 * lodash groupBy method's native implementation
 */

const arr = ["one", "two", "three"];

const groupBy = (arr, identity) => {
  if (identity === "length") {
    return arr.reduce((acc, curr) => {
      if (!acc[curr.length]) {
        // if same length property is not present then make an empty array
        acc[curr.length] = [];
      }
      acc[curr.length].push(curr);
      return acc;
    }, {});
  }
};

console.log(groupBy(["one", "two", "three"], "length")); // { '3': [ 'one', 'two' ], '5': [ 'three' ] }
