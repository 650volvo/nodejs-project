var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.emit('error',new Error('this is an error'));
console.log('this line never executes');