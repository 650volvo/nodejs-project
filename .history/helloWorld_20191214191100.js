/*console.time('timeit');
function fibonacci(n) {
 if (n < 2)
    return 1;
 else
    return fibonacci(n - 2) + fibonacci(n - 1);
}
fibonacci(5); // modify this number based on your system performance
console.timeEnd('timeit'); // On my system it takes about 9000ms (i.e. 9 seconds)*/

function printableMessage() {
    var message = 'hello';
    function setMessage(newMessage) {
    if (!newMessage) throw new Error('cannot set empty message');
    message = newMessage;
    }
    function getMessage() {
    return message;
    }
    function printMessage() {
    console.log(message);
    }
    return {
    setMessage: setMessage,
    getMessage: getMessage,
    printMessage: printMessage
    };
}
printableMessage()