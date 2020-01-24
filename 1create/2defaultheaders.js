var http = require('http');
var server = http.createServer(function(request,response){
    console.log('request headers....');
    console.log(request.headers);
    response.write('hello client');
    response.end();
}).listen(3000);
console.log('server running on port 3000');