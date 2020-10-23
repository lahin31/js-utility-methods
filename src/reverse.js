/**
 * lodash reverse method's native implementation
 */

// implemetation 1
let reverse = function (arr) {
    let newArr = [],
    i = arr.length;
    while (i--) {
        newArr.push(arr[i]);
    }
    return newArr;
};

// implementation 2
let reverseWithPrototype = arr => arr.reverse();

console.log(reverse([1, 2, 3, 4])); //  [4, 3, 2, 1]
console.log(reverseWithPrototype([1, 2, 3, 4])); // [4, 3, 2, 1]
