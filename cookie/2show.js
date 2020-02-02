var express = require('express');

var app = express()
    .use(function(req,res){
        console.log('---client request cookie headers:\n',req.headers['cookie']);
        res.cookie('name','cookie');
        res.end('last line in use function');
    })
    .listen(3000);
console.log('cookie/show.js running on port 3000');