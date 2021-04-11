var Q = require('q');

Q.when(null)
    .then(function(){
        throw new Error('panda');
    })
    .then(function(val){
        console.log('!!!',val);
    })
    .catch(function(reason){
        console.log('Someone throw',reason.message);
        return 'all good';
    })
    .then(function(val){
        //console.log(val);
        return Q.reject(new Error('tact'));
    })
    .then(function(val){
        console.log('!!!',val);
    })
    .catch(function(reason){
        console.log('someone throw',reason.message); 
    })