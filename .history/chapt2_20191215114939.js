function foo(){}
foo.prototype.bar = 123;

var car = new foo();
var plane = new foo();

car.bar =456;
console.log(car.bar);

console.log(plane.bar);