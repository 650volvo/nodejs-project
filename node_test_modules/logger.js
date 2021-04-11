// this is added so I can see if pulling will this disappear

const util = require('util');

function Logger(name) {
    if(!(this instanceof Logger)) {
        return new Logger(name);
      }
    this.name = name;
    //console.log(JSON.stringify(this, null, 2));
    console.log('this:',util.inspect(this, {depth: null}));
};

Logger.prototype.log = function(message) { 
    console.log('[' + this.name + '] ' + message);
};

Logger.prototype.info = function(message) {
    this.log('info: ' + message);
};

Logger.prototype.verbose = function(message) { 
    this.log('verbose: ' + message);
}; 

module.exports = Logger;

var Logger = require('./logger');
var dbLogger = new Logger('DB');
dbLogger.info('This is an informational message');

var accessLogger = new Logger('ACCESS');
accessLogger.verbose('This is a verbose message');

accessLogger.info('ssss')