/*function getConnection(callback) {
    //var connection = 13;
    var connection = require('tedious').Connection;
    try {
    // Lets assume that the connection failed
        throw new Error('connection failed');
    // Notify callback that connection succeeded?
        callback(null, connection);
    }
    catch (error) {
    // Notify callback about error?
    callback(error, null);
    }
}

getConnection(function (error, connection) {
    if (error) {
        console.log('error value:'+error);
        console.log('Error:', error.message);
    }
    else {
        console.log('error value:'+error);
        console.log('Connection succeeded:', connection);
    }
}); */

var Connection = require('tedious').Connection;
var config = {
    server:'yourserver.database.net',
    authentication:{
        type:'default',
        options:{
            encrypt:true,
            database:'your_database'
        }
    }
}
var connection = new Connection(config);
connection.on('connect',function(error){
    if(error){
        console.log(error.message);
    }else{
        console.log('connected');
    }
    //executeStatement();
})
connection.close(function(){
   
})

//var request = require('tedious').Request;
//var types = require('tedious').TYPES;

/*function executeStatement(){
    request = new request("Select ID from hospitals where status =1",function(error){
        if(error){
            console.log(error);
        }
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });

        request.on('done', function(rowCount, more) {  
            console.log(rowCount + ' rows returned');  
        });
    })
}*/