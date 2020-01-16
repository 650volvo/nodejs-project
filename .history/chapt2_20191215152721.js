function getConnection(callback) {
    var connection;
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