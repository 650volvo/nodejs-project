var express = require('express');
var bodyParser = require('body-parser');
var bytes = require('bytes');
var app = express()
    .use(bodyParser.json({limit:'1kb'}))
    .use(bodyParser.urlencoded({ extended: true, limit:'1kb'}))
    .use(function(req,res){
        if(req.body.foo){
            res.end('body parsed. foo='+req.body.foo);
        }else{
            res.end('body does not have foo!');
        }
    })
    .use(function(err,req,res,next){
        res.end('Invalid body!');
    })
    .listen(3000);
console.log('bodyparser server running on 3000');