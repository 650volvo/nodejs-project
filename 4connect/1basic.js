var connect = require('connect'),  http = require('http');

//console.log(connect)
var app = connect();
http.createServer(app).listen(3000);
console.log('server running on 3000');