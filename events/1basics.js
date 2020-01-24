var EventEmitter = require('events').EventEmitter;
//console.log(EvtEmitter);
var emitter = new EventEmitter;
emitter.on('foo',function (arg1,arg2){
    console.log('foo raised arguments:',arg1,arg2)
});

emitter.emit('foo',{a:123},{b:455});