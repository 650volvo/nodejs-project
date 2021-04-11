var Q = require('q');

function iAsync(){
    return Q.when(null).then(function(){
        var foo; foo.bar;
    });
}

iAsync().catch(function(err){
    var foo; foo.bar;
}).done();