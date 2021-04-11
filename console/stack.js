function foo(){
    var stack = new Error('trace at foo').stack;
    console.log(stack);
}

foo();