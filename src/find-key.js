/**
 * lodash findKey method's native implementation
 */

const users = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true },
};

const findKey = (obj, identity) => {
  if (typeof identity === "function") {
    let obj_values = Object.values(obj);
    let index = obj_values.findIndex(item => identity(item));
    return Object.keys(obj)[index];
  } else if (identity && identity.constructor === Object) {
    let obj_values = Object.values(obj);
    let index = obj_values.findIndex(
      item => JSON.stringify(item) === JSON.stringify(identity)
    );
    return Object.keys(obj)[index];
  } else if (Array.isArray(identity)) {
    const key = identity[0];
    const value = identity[1];
    let obj_values = Object.values(obj);
    let index = obj_values.findIndex(item => item[key] === value);
    return Object.keys(obj)[index];
  }
  let obj_values = Object.values(obj);
  let index = obj_values.findIndex(item => item[identity]);
  return Object.keys(obj)[index];
};

console.log(
  findKey(users, function(o) {
    return o.age < 40;
  })
); // barney
console.log(findKey(users, { age: 1, active: true })); // pebbles
console.log(findKey(users, ["active", false])); // fred
console.log(findKey(users, "active")); // barney
