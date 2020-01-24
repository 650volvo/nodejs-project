var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter()

emitter.on('foo',function(){
    console.log('subscriber1');
});
emitter.on('foo',function(){
    console.log('subscribe 2');
})

emitter.emit('foo');