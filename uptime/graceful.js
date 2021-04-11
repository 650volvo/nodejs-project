var express = require('express');
express()
    .use(function(req,res,next){
        res.write('hello\n');
        res.foo.bar;
        res.end('world!');
    })
    .use(function (err, req, res, next) {
        console.log('Error in server', err);
        res.end('Error!');
    })
    .listen(3000);
console.log("Server running on http://localhost:3000");