function someClass(){
    this.someProperity = 'some inital value';
}

someClass.prototype.someMemberFunction = function(){
    /* Do something using this */
    this.someProperty = 'modified value';
}


var instance = new someClass();


console.log(instance.someProperty);
instance.someMemberFunction();
console.log(instance.someProperty);