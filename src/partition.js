/**
 * lodash partiton method's native implementation
 */

let users = [
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: true },
  { user: "pebbles", age: 1, active: false },
];

const partition = (arr, identity) => {
  if (typeof identity === "function") {
    return [
      ...[arr.filter(item => identity(item))],
      ...[arr.filter(item => !identity(item))],
    ];
  } else if (identity && identity.constructor === Object) {
    return [
      ...[
        arr.filter(
          item => item.age === identity.age && item.active === identity.active
        ),
      ],
      ...[
        arr.filter(
          item => item.age !== identity.age || item.active !== identity.active
        ),
      ],
    ];
  } else if (Array.isArray(identity)) {
    const key = identity[0];
    const value = identity[1];
    return [
      ...[arr.filter(item => item[key] === value)],
      ...[arr.filter(item => item[key] !== value)],
    ];
  } else {
    return [
      ...[arr.filter(item => item[identity])],
      ...[arr.filter(item => !item[identity])],
    ];
  }
};

console.log(
  partition(users, function(o) {
    return o.active;
  })
);
/**
[
  [ { user: 'fred', age: 40, active: true } ],
  [
    { user: 'barney', age: 36, active: false },
    { user: 'pebbles', age: 1, active: false }
  ]
]
 */
console.log(partition(users, { age: 1, active: false }));
/**
[
  [ { user: 'pebbles', age: 1, active: false } ],
  [
    { user: 'barney', age: 36, active: false },
    { user: 'fred', age: 40, active: true }
  ]
]
 */
console.log(partition(users, ["active", false]));
/**
[
  [
    { user: 'barney', age: 36, active: false },
    { user: 'pebbles', age: 1, active: false }
  ],
  [ { user: 'fred', age: 40, active: true } ]
]
 */
console.log(partition(users, "active"));
/**
[
  [
    { user: 'barney', age: 36, active: false },
    { user: 'pebbles', age: 1, active: false }
  ],
  [ { user: 'fred', age: 40, active: true } ]
]
 */
