var fs = require('fs');

function loadJSON(filename,cb){
    fs.readFile(filename,function(err,data){
        if(err) return cb(err);
            try{
                var parsed = JSON.parse(data); 
            }
            catch(err){
                return cb(err);
                //console.log('I am executaed');
            }
            return cb(null, parsed);
        }
    );
}

loadJSON('good.json',function(err,data){
    console.log('our callback called');
    if(err) console.log('Error',err.message);
    else{
        var foo;
        console.log(foo.bar);
    }
});