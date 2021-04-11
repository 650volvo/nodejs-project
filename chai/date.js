var chai = require('chai');
chai.use(require('chai-datetime'));

var t1 = new Date();

console.log(chai.assert.equalTime(t1,new Date()));