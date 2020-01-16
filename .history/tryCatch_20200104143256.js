try {
    //console.log('About to throw an error');
    //throw new Error('Error thrown');
    var sss
}
catch (e) {
    console.log('I will only execute if an error is thrown');
    console.log('Error caught: ', e.message);
}
finally {
    console.log('I will execute irrespective of an error thrown');
}