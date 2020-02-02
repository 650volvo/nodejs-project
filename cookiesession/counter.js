var express = require('express');
var cookiesession = require('cookie-session');
var app = express()
    .use(cookiesession({
        keys:['my super secret sign key']
    }))
    .use('/home',function(req,res){
        if(req.session.views){
            req.session.views++;
        }else{
            req.session.views = 1;
        }
        res.end('total views for you is'+ req.session.views);
    })
    .use('/reset',function(req,res){
        //delete req.session.views;
        req.session = null;
        res.end('cleared all views');
    })
    .use(function(err,req,res,next){
        console.log('error handled',err.message);
        res.writeHead(500);
        res.end('Unable to process the request');
    })
    .listen(3000);
    console.log('cookiesession/counter.js running on port 3000');