var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter;
emitter.on('removeListener',function(eventName,listernerFunction){
    console.log(eventName,'listerner function',listernerFunction.name);
});
emitter.on('newListerner',function(EventName,listernerFunction){
    console.log(eventName,'listerner function',listernerFunction.name);
})
function a(){};
function b(){};
emitter.on('foo',a);
emitter.on('foo',b);
//emitter.removeListener('foo',a);
//emitter.removeListener('foo',b);