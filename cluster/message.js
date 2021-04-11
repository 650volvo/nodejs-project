var cluster = require('cluster');
if(cluster.isMaster){
    var worker =  cluster.fork();
    worker.on('message',function(msg){
        console.log('Message received from worker:',msg);
    })
} else {
    console.log('work started');
    process.send('hello world');
    process.exit();
}