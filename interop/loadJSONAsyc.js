var Q = require('q');
var fs = require('fs');
var readFilesAsync = Q.nbind(fs.readFile);

function loadJSONAsync(filename){
    return readFilesAsync(filename)
        .then(function(res){
            return JSON.parse(res);
        });
}

loadJSONAsync('good.json')
    .then(function(val){
        console.log(val);
    })
    .catch(function(error){
        console.log('good.json error + log', error.message);
    })
    .then(function(){
        return loadJSONAsync('absent.json');
    })
    .then(function(val){
        console.log(val);
    })
    .catch(function(err){
        console.log('absent.json error',err.message);
    })
    .then(function(){
        return loadJSONAsync('bad.json');
    })
    .then(function(val){
        console.log(val);
    })
    .catch(function(err){
        console.log('bad.json error', err.message);
    });


    /*fs.readfile('./good.json',function(err,data){
        console.log(data);
    })*/