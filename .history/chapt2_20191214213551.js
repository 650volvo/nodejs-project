var foo = {
    good:123,
    land:function(){
        console.log('out put this: ',this.good);
    }
}
console.log('out put food.good',foo.good);
foo.land();

