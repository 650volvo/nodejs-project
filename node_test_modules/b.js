exports.loaded = false; 
var a = require('./module/a'); 

module.exports = {
    aWasLoaded: a.loaded,
             loaded: true
};