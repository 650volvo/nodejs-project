var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()
    .use(cookieParser())
    .use('/toggle',function(req,res){
        if(req.cookies.name){
            res.clearCookie('name');
            res.end('name cookie cleared. It was '+req.cookies.name);
        }else{
            res.cookie('name','foo');
            res.end(' name cookie set');
        }
    }).listen(3000);
    console.log('cookie/4clear.js running on port 3000');