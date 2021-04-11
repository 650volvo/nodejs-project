var http = require('http');
http.createServer(function (req, res) {
res.write('Hello\n');
res.foo.bar; // Programming error. Tried to read property 'bar' on an undefined member 'foo' res.end('World!');
}).listen(3000);
console.log("Server running on http://localhost:3000");