const users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];

const findLastIndex = (arr, identity) => {
  if (typeof identity === "function") {
    return arr.map((item) => identity(item)).lastIndexOf(true);
  } else if (identity && identity.constructor === Object) {
    return arr
      .map((item) => JSON.stringify(identity) === JSON.stringify(item))
      .lastIndexOf(true);
  } else if (Array.isArray(identity)) {
    const key = identity[0];
    const value = identity[1];
    return arr.map((item) => item[key] === value).lastIndexOf(true);
  } else {
    return arr.map((item) => item[identity]).lastIndexOf(true);
  }
};

console.log(
  findLastIndex(users, function (o) {
    return o.user === "pebbles";
  })
); // 2
console.log(findLastIndex(users, { user: "barney", active: true })); // 0
console.log(findLastIndex(users, ["active", false])); // 2
console.log(findLastIndex(users, "active")); // 0
