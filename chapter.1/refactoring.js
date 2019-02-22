function addMaker (a) {
  return function (b) {
    return a + b;
  };
}

function bvalue (key) {
  return function (obj) {
    console.log(obj);
    return obj[key];
  };
}

bvalue('a')({ a: 'hi', b: 'hello' });

var users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 }
];

function filter (list, predicate) {
  var new_list = [];
  for (var i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) {
      new_list.push(list[i]);
    }
  }
  return new_list;
}

console.log(
  filter(users, function (user) {
    return user.id === 3;
  })[0]
);
