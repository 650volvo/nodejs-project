var express = require('express');
var serverStatic = require('serve-static');
var app = express().use(serverStatic(
    __dirname+'/public')
).listen(3000);
console.log('dirname',__dirname);