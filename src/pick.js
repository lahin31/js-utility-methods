/**
 * lodash pick method's native implementation
 */
let object = { a: 1, b: "2", c: 3 };

function pick(obj, paths) {
  let obj_arr = Object.entries(obj);
  return obj_arr.reduce((acc, [key, val]) => {
    if (paths.includes(key)) {
      acc[key] = val;
    }
    return acc;
  }, {});
}

console.log(pick(object, ["a", "c"])); // { a: 1, c: 3 }
