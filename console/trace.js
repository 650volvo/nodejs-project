function foo(){
    console.trace('trace at foo');
    console.log('stack trace painted');
}

function bar(){
    foo();
}

bar();