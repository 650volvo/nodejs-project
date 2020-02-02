var express = require('express');
express()
    .use('/home',function(req,res,next){
        console.log('first path',req.url);
        next();
    })
    .use(function(req,res,next){
        console.log('second',req.url);
        next();
    }).listen(3000);
    console.log('requestmount/mountUrl.js running on port 3000');