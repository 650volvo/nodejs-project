var inherits = require('util').inherits;
function Base(){this.message = 'message'};
Base.prototype.foo = function(){
    return this.message + 'Base foo';
};
function Child(){
    Base.call(this);
};
inherits(Child,Base);
Child.prototype.foo = function(){
    return Base.prototype.foo.call(this)+"Child foo";
}

var child = new Child();
console.log(child.foo());