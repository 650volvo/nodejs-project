function getConnection(callback) {
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
}); 

//var Connection = require('tedious').Connection;