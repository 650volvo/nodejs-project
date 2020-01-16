var foo = {
    good:123,
    land:function(){
        console.log('out put this: ',this.good);
    }
}
console.log('out put food.good',foo.good);
foo.land();

function food(){
    this.cow = 123;
    console.log('is this global:',this == global)
}
food();

var test = new food();
console.log(test.cow);