// var myObj = {};

// Object.assign(myObj,{a:1,b:2,c:3},{x:7,y:9,z:10});
//console.log(myObj);

function sumOne(a,b)
{
    return a+b;
}

var arr = [5,4];
//console.log(sumOne(...arr)); //spread

function sumTwo(a,b,...args)
{
    let multi = a * b;
    let sum = 0;
    for(const arg of args)
    {
        sum+=arg;
    }
    return [multi,sum];
}

console.log(sumTwo(2,3,1,1,1));