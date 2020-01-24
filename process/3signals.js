setTimeout(function(){
    console.log('5 seconds passed. Existing')
},5000);
console.log('Started. Will exit in 5 seconds');
process.on('SIGINT',function(){
    console.log('Got Signit. Ignoring');
});