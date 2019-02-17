var users = [
  { id: 1, name: 'ID', age: 32 },
  { id: 2, name: 'HA', age: 25 },
  { id: 3, name: 'BJ', age: 32 },
  { id: 4, name: 'PJ', age: 28 },
  { id: 5, name: 'JE', age: 27 },
  { id: 6, name: 'JM', age: 32 },
  { id: 7, name: 'HI', age: 24 }
];

/* 30이하 */

var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
  if (users[i].age < 30) {
    temp_users.push(users[i]);
  }
}

console.log(temp_users);
/*
  [[object Object] {
    age: 32,
    id: 1,
    name: "ID"
  }, [object Object] {
    age: 32,
    id: 3,
    name: "BJ"
  }, [object Object] {
    age: 32,
    id: 6,
    name: "JM"
  }]
*/

var ages = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
  ages.push(temp_users[i].age);
}

console.log(ages);
/* 25, 28, 27, 24 */

/* 30 이상 */
var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
  if (users[i].age > 30) {
    temp_users.push(users[i]);
  }
}

console.log(temp_users);
/*
    [[object Object] {
    age: 32,
    id: 1,
    name: "ID"
    }, [object Object] {
    age: 32,
    id: 3,
    name: "BJ"
    }, [object Object] {
    age: 32,
    id: 6,
    name: "JM"
    }]
*/

var ages = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
  ages.push(temp_users[i].age);
}

console.log(ages);
/* [32, 32, 32] */

var names = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
  names.push(temp_users[i].name);
}

console.log(names);
/* ["ID", "BJ", "JM"] */

/*
    함수형 패러다임에서는 이전 값의 상태를 변경하지 않고 새로운 값을 만드는 식으로
    값을 다루는 것은 함수형 프로그래밍의 매우 중요한 콘셉트 중 하나이다.
*/

function filter (list, predicate) {
  var new_list = [];
  for (var i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) {
      new_list.push(list[i]);
    }
  }
  return new_list;
}