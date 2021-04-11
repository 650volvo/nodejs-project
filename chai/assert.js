var assert = require('chai').assert;
var res = assert.isNull(null,'Null should be null');
var res2 = assert.isNull(undefined,'undefined should be null');
console.log(res2);