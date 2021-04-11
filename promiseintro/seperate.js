var  Q = require('q');

function getPromise(){
    var defered = Q.defer();
    setTimeout(function(){
        defered.resolve('final value');
    },1000);
    return defered.promise;
}

var promise = getPromise();
promise.then(function(val){
    console.log('done with',val);
});