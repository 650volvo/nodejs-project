function Animal(name){
    this.name = name;
}
Animal.prototype.walk = function(destination){
    console.log(this.name,'is walking to ',destination);
}

var animal = new Animal('dolphin');
animal.walk('Atlanta');


function Bird(name){
    Animal.call(this,name);
    // Any additional initialization code you want
}

Bird.prototype.__proto__ = Animal.prototype;
Bird.prototype.fly = function(destination){
    console.log(this.name,'is flying to',destination);
}
var bird = new Bird('swallow');
bird.walk('canada');
bird.fly('Christchurch');