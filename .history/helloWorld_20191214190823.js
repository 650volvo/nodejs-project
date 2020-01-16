console.time('timeit');
function fibonacci(n) {
 if (n < 2)
    return 1;
 else
    return fibonacci(n - 2) + fibonacci(n - 1);
}
fibonacci(5); // modify this number based on your system performance
console.timeEnd('timeit'); // On my system it takes about 9000ms (i.e. 9 seconds)

// Are these all falsy?
if (!false) {
    console.log('falsy');
   }
   if (!null) {
    console.log('falsy');
   }
   if (!undefined) {
    console.log('falsy');
   }