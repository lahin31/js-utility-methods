const users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

const findIndex = (arr, identity) => {
  if (typeof identity === "function") {
    return arr.findIndex((item) => identity(item));
  } else if (identity && identity.constructor === Object) {
    return arr.findIndex(
      (item) => JSON.stringify(identity) === JSON.stringify(item)
    );
  } else if (Array.isArray(identity)) {
    const key = identity[0];
    const value = identity[1];
    return arr.findIndex((item) => item[key] === value);
  } else {
    return arr.findIndex((item) => item[identity]);
  }
};

console.log(
  findIndex(users, function (o) {
    return o.user == "barney";
  })
); // 0
console.log(findIndex(users, { user: "fred", active: false })); // 1
console.log(findIndex(users, ["active", false])); // 0
console.log(findIndex(users, "active")); // 2
