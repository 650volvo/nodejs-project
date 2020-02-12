function maybeSync(arg,callback){
    if(arg){
        // BAD! Do not call synchronously!
        callback('cached data');
    }else{
        setTimeout(function(){
            callback('loaded data');
        },500);
    }
}

maybeSync(true,function(data){
    foo();
});
bar();

function foo(){console.log('foo')};
function bar(){console.log('bar')};