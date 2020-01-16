var foo = {
    good:123,
    land:function(){
        console.log('out put this: ',this.good);
    }
}
console.log('out put food.good',foo.good);
foo.land();

function food(){
    console.log('is this called from globals', this == global);
}
food();