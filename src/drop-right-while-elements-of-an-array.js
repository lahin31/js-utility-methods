var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];

function dropRightWhile(arr, identity) {
  if (typeof identity === "function") {
    return arr.filter((item) => !identity(item));
  } else if (identity && identity.constructor === Object) {
    return arr.filter(
      (item) => JSON.stringify(item) !== JSON.stringify(identity)
    );
  } else if (Array.isArray(identity)) {
    const key = identity[0];
    const val = identity[1];
    return arr.filter((item) => item[key] !== val);
  } else {
    return arr.filter((item) => item[identity] !== undefined);
  }
}

console.log(
  dropRightWhile(users, function (o) {
    return !o.active;
  })
); // [ { user: 'barney', active: true } ]
console.log(dropRightWhile(users, { user: "pebbles", active: false })); // [ { user: 'barney', active: true }, { user: 'fred', active: false } ]
console.log(dropRightWhile(users, ["active", false])); // [ { user: 'barney', active: true } ]
console.log(dropRightWhile(users, "active"));
/**
[
	{ 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 */
