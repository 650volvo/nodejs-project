console.log("I m here");

/*var foo = {
    bar: 123,
    bas: [{
    qux: 1
    },
    {
    qux: 2
    },]
};
console.log(foo.bas[1].qux);*/

var foo2 = function () { // no function name given i.e. anonymous function
    console.log('foo2');
}
foo2();

setTimeout(function () {
    console.log('2000 milliseconds have passed since this demo started');
   }, 2000);