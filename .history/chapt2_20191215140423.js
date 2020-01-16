function someClass(){
    this.someProperity = 'some inital value';
}

someClass.prototype.someMemberFunction = function () {
    /* Do something using this */
    this.someProperty = 'modified value';
   }

