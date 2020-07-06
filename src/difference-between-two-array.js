let arr1 = [1, 2];
let arr2 = [1, 3];

const difference = (arr1, arr2) => {
  return arr1.filter((val) => !arr2.includes(val));
};

console.log(difference(arr1, arr2)); // [2]

/**
 * if you want to get 3 based on the arr2, then change the line
 * return arr2.filter(val => !arr1.includes(val))
 */
