var Q = require('q');

var loadItem = Q.nbind(function(id,cb){
    setTimeout(function(){
        cb(null,{id:id});
    },500);
});

Q.all([loadItem(1),loadItem(32)])
    .then(function(item){
        console.log('item:',item);
    })
    .catch(function(reason){
        console.log(reason);
    });