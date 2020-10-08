/**
 * lodash compact method's native implementation
 */

let arr = [0, 1, false, 2, "", 3];

const compact = arr => arr.filter(Boolean);

console.log(compact(arr)); // [ 1, 2, 3 ]

/**
 * Explanation: The Boolean object represents two values, "true" and "false". If values are 0, -0, null, false, NaN, undefined, empty string (""), the Boolean object has a value of false.
 *
 * arr.filter(Boolean)
 * same as,
 * arr.filter( function(x) { return Boolean(x) })
 * since Boolean() is also a function that returns truthy when true and falsy when false! so  0, -0, null, false, NaN, undefined are filtered out from the array.
 */
