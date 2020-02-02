var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('nothing send in');
});
app.get(/^\/[0-9]+$/,function(req,res){
   res.send('number!');
});
app.get('/*',function(req,res){
    res.send('matched!');
})
app.listen(3000);