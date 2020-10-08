/**
 * this is not completely a lodash method, but similar to merge method
 */

let object = {
  name: "David",
  age: 25,
  address: {
    city: "California",
    country: "United states of America",
  },
  language: ["english", "javascript"],
};

let another = {
  name: "Mark",
  age: 35,
  address: {
    city: "London",
    country: "England",
  },
  language: ["english", "c++"],
};

const merge = (obj1, obj2) => {
  for (let key in obj2) {
    obj1[key] = generateMerge(obj1[key], obj2[key]);
  }
  return obj1;
};

const generateMerge = (obj1, obj2) => {
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    return [...obj1, ...obj2];
  } else if (isObject(obj1) && isObject(obj2)) {
    return merge(obj1, obj2);
  }
  return obj2;
};

const isObject = obj => obj && obj.contructor === Object;

console.log(merge(object, another));
/**
{
  name: 'Mark',
  age: 35,
  address: { city: 'London', country: 'England' },
  language: [ 'english', 'javascript', 'english', 'c++' ]
}
 */
