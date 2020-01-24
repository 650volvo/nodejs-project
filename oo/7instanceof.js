var inherits = require('util').inherits;
const util = require('util');
function A() {};
function B() {}; inherits(B,A);
function C() {};

var b = new B();
console.log(util.inspect(A));
console.log(b instanceof B);
console.log(b instanceof A);
console.log(b instanceof C);