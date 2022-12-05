function doAddition(x){
    return function(y){
        return x+y;
    }
}

console.log(doAddition(4)(5));