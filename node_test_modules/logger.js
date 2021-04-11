<<<<<<< Updated upstream
// this is added so I can see if pulling will this disappear
=======
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    this.log('info: ' + message);
=======
    this.log('info: ' + message); 
>>>>>>> Stashed changes
};

Logger.prototype.verbose = function(message) { 
    this.log('verbose: ' + message);
}; 

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
module.exports = Logger;

var Logger = require('./logger');
var dbLogger = new Logger('DB');
dbLogger.info('This is an informational message');

var accessLogger = new Logger('ACCESS');
accessLogger.verbose('This is a verbose message');

<<<<<<< Updated upstream
accessLogger.info('ssss')
=======
accessLogger.info('ssss')


>>>>>>> Stashed changes
