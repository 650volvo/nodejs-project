function simulateAsync(cb) { 
    setTimeout(function () {
        cb(new Error('This async task will fail')); 
    }, 500);
}

describe('our test suite', function () {
    
    it('test simulateAsync', function (done) { 
        
        simulateAsync(function (err) {
            if (err) throw err;
            done();  
        }); 
    });
});