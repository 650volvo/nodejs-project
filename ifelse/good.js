function alwaysSync(arg,cb){
    if(arg){
        process.nextTick(function(){
            cb('cached data');
        });
    }
    else{
        setTimeout(function(){
            cb('loaced data');
        },500);
    }
}

alwaysSync(false,function(data){
    foo(data);
})
bar();

function foo(data){ console.log('foo',data)};
function bar(){ console.log('bar')};