/*console.log(console === global.console);  

console.log(setTimeout === global.setTimeout);
console.log(process === global.process);*/

var us = require('./node_modules/underscore');
var optim = require('optimist').argv;
delete optim['$0']
console.log(optim);
//console.log(us.min([3,1,2]));
//var test = require('caseless');
var foo = [1, 10, 51, 200, 900, 90, 40];
var result = us.reject(foo,function(item){
    return item %2 == 0;
});
console.log(result);