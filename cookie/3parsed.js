var express = require('express');
var cookieParser = require('cookie-parser');
var app = express()
    .use(cookieParser())
    .use(function(req,res){
        if(req.cookies.name){
            console.log('User name:',req.cookies.name);
        }else{
            res.cookie('name','foo');
        }
    }).listen(3000);
console.log('cookie/3parsed.js running on port 3000');