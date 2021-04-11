var Q = require('q');
function gieco (a,b){
    return a+b;
}
Q.when(gieco(2,4)).then(function(val){
    console.log(val);
})

var def = Q.defer();
def.resolve(Q.when('foo'));
def.promise.then(function(val){
    console.log(val);
});

Q.when(null).then(function(){
    return Q.when('foo');
})
.then(function(val){
    console.log(val);
});