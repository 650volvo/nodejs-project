var connect = require('connect');
connect()
//.use(function () { throw new Error('Big bad error details'); }) 
.use(function(){next('ssssss');})
.use(function (req, res, next) { res.end('I will never get called'); }) 
.use(function (err, req, res, next) {
        console.log('Error handled:', err.message);
        res.writeHead(500);
        res.end('Server error!');
    })
    .listen(3000);
    console.log('server running on 3000');