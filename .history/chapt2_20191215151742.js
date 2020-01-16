function getConnection(callback) {
    var connection;
    return Promise.resolve('Do some stuff');
}

getData()
    .then(getConnection)
    .catch((e) => {
        // Handle the error!
    })