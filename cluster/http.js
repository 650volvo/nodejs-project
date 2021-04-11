var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if(cluster.isMaster){
    for(var i =0;i<numCPUs;i++){
        var worker = cluster.fork();
        console.log('started a worker with process id = ',worker.process.pid);
    }
    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' exited');
    });
} else {
    http.createServer(function(req,res){
        res.writeHead(200);
        res.end("Hello world from worker"+ cluster.worker.process.id);
    }).listen(3000);
}