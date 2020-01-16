function getConnection(connection) {
    var connection;
    return Promise.resolve('Do some stuff');
}

getData()
    .then(getConnection)
    .catch((e) => {
        // Handle the error!
    })