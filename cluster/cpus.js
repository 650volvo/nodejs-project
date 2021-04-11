var cluster = require('cluster');
var numCPUS = require('os').cpus().length;
/*if(cluster.isMaster){
    for(var i=0;i<numCPUS;i++){
        console.log('start a worker');
        cluster.fork();
        console.log('I am a worker process, my pid is',cluster.worker.id)
    }
    cluster.on('exit',function(worker,code,signal){
        console.log('worker'+worker.process.pid + 'exited');
    })
} else{
    console.log("worker started");
    process.exit();
}*/

if(cluster.isMaster){
    console.log(process.pid);
    //process.kill();
}else if(cluster.isWorker){
    //worker.process.kill();
}
