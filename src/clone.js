/**
 * lodash clone method's native implementation
 */
let arr = [{ a: 1 }, { b: 2 }];
let obj = { x: 20, y: 30 };

let shallow = val => {
  if (Array.isArray(val)) return [...val];
  else if (val && val.constructor === Object) return { ...obj };
  return {};
};

console.log(arr[0] === shallow(arr)[0]); // true
console.log(obj[0] === shallow(obj)[0]); // true
