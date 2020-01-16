
    setTimeout(function () {
    console.log('About to throw an error');
    
    try {
        throw new Error('Error thrown');
    }catch(e){
        console.log('error caught');
    }
    }, 1000);



   console.log('I am outside the try block');