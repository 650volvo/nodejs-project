var http = require('http'), express = require('express');
var app = express().use(function(req,res,next){
    res.end('hello express!');
});
http.createServer(app).listen(3000);