function getConnection(callback) {
    var connection = callback;
    return Promise.resolve('Do some stuff');
}

getConnection()
    .then(getConnection)
    .catch((e) => {
        // Handle the error!
    })