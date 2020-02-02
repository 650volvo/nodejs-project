var connect = require('connect');
connect()
.use(function (req, res, next) { next(new Error('Big bad error details')); }) 
.use(function (req, res, next) { res.end('I will never get called'); }) .listen(3000);
console.log('server running on 3000');