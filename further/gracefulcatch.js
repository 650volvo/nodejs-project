var Q = require('q');

function iAsync(){
    return Q.when(null).then(function(){
        var foo;
        foo.bar;
    });
}

iAsync().then(function(){});
/*.catch(function(err){
    console.log(err.message);
});*/