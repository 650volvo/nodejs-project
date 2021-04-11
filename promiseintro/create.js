var Q = require('q');
var defered = Q.defer();
var promise = defered.promise;

promise.then(function(val){
    console.log('done with',val);
});

defered.resolve('final value');