function getData() {
    return Promise.resolve('Do some stuff');
}

function changeDataFormat(){
    return throw new Error('connection failed');
}

function storeData(){
    // ...
}

getData()
    .then(changeDataFormat)
    .then(storeData)
    .catch((e) => {
        // Handle the error!
    })