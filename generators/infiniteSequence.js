function* infiniteSequence(){ 
    var i = 0;
    while(i<10){ 
        yield i++;
} }

var iterator = infiniteSequence();
while (true){
    console.log(iterator.next()); 
}