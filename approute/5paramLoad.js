var express = require('express');
var app = express();

app.param('userId',function(req,res,next,userId){
    res.write('Looking up user:'+userId+'\n');
    req.user = {userId:userId};
    next();
});
app.get('/user/:userId',function(req,res){
    res.end('user is'+ JSON.stringify(req));
});
app.listen(3000);
console.log('approute/5paramLoad.js running on port 3000');