/**
 * lodash cloneDeep native implementation
 */

let obj = { a: 10, b: { c: 20 } };

let new_obj = JSON.parse(JSON.stringify(obj));

new_obj.b.d = 30;

console.log(new_obj); // { a: 10, b: { c: 20, d: 30 } }
console.log(obj); // { a: 10, b: { c: 20 } }
