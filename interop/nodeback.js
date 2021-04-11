function data(delay,cb){
    setTimeout(function(){
        cb(null,'data');
    },delay);
}

function error(delay,cb){
    setTimeout(function(){
        var err = {message:'ssssss'};

        cb(err,data);
        //cb(new Error('error'));
    },delay);
}

data(1000,function(err,data){
    console.log(data);
});

error(1000,function(err,data){
    console.log(err.message);
});

var Q = require('q');
var dataAsync = Q.nbind(data);
var errorAsync = Q.nbind(error);

dataAsync(1000)
    .then(function(data){console.log(data);});

errorAsync(1000)
    .then(function(data){})
    .catch(function(error){console.log(error.message);});