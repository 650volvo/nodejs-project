function getData() {
    return Promise.resolve('Do some stuff');
}

function changeDataFormat(){
    throw new Error();
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