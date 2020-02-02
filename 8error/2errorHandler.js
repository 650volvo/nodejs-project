var connect = require('connect');

connect().use(function(req,res,next){next(new Error('I have a big error here'));})
.use(function(req,res,next){res.end('I will never get called');})
.use(function(error,req,res,next){
     console.log('Error handled',error.message);
     //console.log('stacktrace',error.stack);
     res.writeHead(500);
     res.end('unable to process the request');
})
.listen(3000);
console.log('server running on port 3000');