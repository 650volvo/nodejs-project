var fs = require("fs");
fs.readFile('bmwm2.txt',function(error,data){
    if(error){
        console.log(err.stack);
    }
});