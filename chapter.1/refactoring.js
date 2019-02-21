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
