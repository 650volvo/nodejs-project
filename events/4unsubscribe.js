var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var fooHandler = function(){
    console.log('handle called');
}
emitter.removeListener('foo',fooHandler);
emitter.on('foo',fooHandler);
emitter.emit('foo');
emitter.emit('foo');