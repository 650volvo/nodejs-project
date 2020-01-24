var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var listenerCalled = 0;
function someCallback(){
    emitter.on('foo',function(){listenerCalled ++});
}
for(var i=0;i<20;i++){
    someCallback();
}

emitter.emit('foo');
console.log('listener called',listenerCalled);