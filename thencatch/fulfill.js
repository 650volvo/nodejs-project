var Q = require('q');

Q.when(null).then(function(val){
    console.log(val == null);
});

Q.when('kung foo').then(function(val){
    console.log(val);
})

console.log('print first');