var m = new Map();

m.set(1,"Uno");
m.set(2,"dos");
m.set(3,"Tres");
m.set(4,"Cuatro");

// console.log(m);

// for(let key of m.keys())
// {
//     console.log(`Key: ${key}`);
// }

// for(let value of m.values())
// {
//     console.log(`Value: ${value}`);
// }

for(let [key,value] of m)
{
    console.log(`Key: ${key} has a value: ${value}`);
}

// m.forEach((value)=>{
//     console.log(value);
// });

m.forEach((value,key)=>{
    console.log(`Key: ${key} has a value: ${value}`);
});