function echo (request,response,next){
    request.pipe(request);
}
var connect = require('connect');
connect().use(echo).listen(3000);