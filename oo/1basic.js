function foo(){};
console.log(foo.prototype.constructor === foo);

var expim = new foo();
console.log(expim.constructor.name);