/**
 * lodash orderBy native implementation
 */

const users = [
  { user: "fred", age: 48 },
  { user: "barney", age: 34 },
  { user: "fred", age: 40 },
  { user: "barney", age: 36 },
];

function orderBy(arr, identity, order) {
  let new_arr = [...arr];

  if (identity[0] === "user" && identity[1] === "age") {
    new_arr = new_arr.sort(userSort("age", order[1]));
    new_arr = new_arr.sort(userSort("user", order[0]));
    return new_arr.map(item => [item.user, item.age]);
  } else if (identity[0] === "age" && identity[1] === "user") {
    new_arr = new_arr.sort(userSort("user", order[1]));
    new_arr = new_arr.sort(userSort("age", order[0]));
    return new_arr.map(item => [item.age, item.user]);
  }
}

function userSort(item, type) {
  return function(a, b) {
    if (a[item] < b[item] && type === "asc") return -1;
    if (a[item] > b[item] && type === "asc") return 1;
    if (a[item] > b[item] && type === "desc") return -1;
    if (a[item] < b[item] && type === "desc") return 1;
    return 0;
  };
}

console.log(orderBy(users, ["user", "age"], ["asc", "desc"])); // [ [ 'barney', 36 ], [ 'barney', 34 ], [ 'fred', 48 ], [ 'fred', 40 ] ]
console.log(orderBy(users, ["age", "user"], ["desc", "asc"])); // [ [ 48, 'fred' ], [ 40, 'fred' ], [ 36, 'barney' ], [ 34, 'barney' ] ]
