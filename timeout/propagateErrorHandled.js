var express = require('express');
var timeout = require('connect-timeout');
var app = express()
    .use(timeout(1000))
    .use(function(req,res,next){
        setTimeout(function(){
            next();
        },2000)
    })
    .use(holtOnTimeout)
    .use(function(req,res,next){
        res.end('Done');
    })
    .listen(3000);

function holtOnTimeout(req,res,next){
    if(!req.timeout) next();
    //console.log('req.timeout'+req.timeout);
}

console.log('timeout/progagateErrorHandled.js running on port 3000');