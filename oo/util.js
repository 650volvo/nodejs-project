function Animal(name){
    this.name = name;
}
Animal.prototype.walk = function(destination){
    console.log(this.name,'is walking to ',destination);
}

var inherits = require('util').inherits;
function Bird(name){
    Animal.call(this,name);
    console.log('bird name',name);
}
inherits(Bird,Animal);
Bird.prototype.fly = function (dest) {
    console.log(this.name,'is flying to', dest);
}

var bird = new Bird('sparrow');
bird.walk('London');
bird.fly('sydney'); //48+15