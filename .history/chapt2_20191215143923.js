
    setTimeout(function () {
    console.log('About to throw an error');
    throw new Error('Error thrown');
    try {

    }catch(e){
        console.log('I will never execute!');
    }
    }, 1000);



   console.log('I am outside the try block');