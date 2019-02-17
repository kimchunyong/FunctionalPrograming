function addMaker (a) {
  return function (b) {
    return a + b;
  };
}

addMaker(10)(5);

var add5 = addMaker(5);
add5(3);
add(4);

var v1 = 100;
var v2 = function () {};
function f1 () {
  return 1000;
}
function f2 () {
  return function () {};
}
