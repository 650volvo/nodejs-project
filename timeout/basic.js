var express = require('express');
var timeout = require('connect-timeout');

var app = express()
    .use('/api',timeout(5000),function(req,res,next){
    
    },function(error,req,res,next){
        if(req.timeout){
            res.statusCode = 500;
            res.end('Request timtout');
        }else{
            next('res.statusCode:'+res.statusCode);
            res.end(error);
        }
    }
).listen(3000);
console.log('timeout/basic.js running on port 3000');