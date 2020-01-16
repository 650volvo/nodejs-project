var request = require('request'); //http wrapped module
function requestWrapper(url, callback) {
    request.get(url, function (err, response) {
        if (err) {
            callback(err);
        } else {
            callback(null, response);
        }
    })
}