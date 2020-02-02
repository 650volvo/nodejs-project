var echo = {
    handle:function(request,response,next){
        req.pipe(response);
    }
}
var connect = require('connect');
connect().use(echo).listen(3000);