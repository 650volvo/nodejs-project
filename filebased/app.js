/*var foo = {
    a: 1,
    b: 'a string',
    c: true };
var json = JSON.stringify(foo);
//console.log(json);
//console.log(typeof json);

var backToJs = JSON.parse(json);
console.log(backToJs);
console.log(typeof backToJs); */

var config = require('./config');
console.log(config.foo);