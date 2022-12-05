var arr = [2,4,6,3,5,9,8];

// starting coordinate is inclusive and last coordinate is exclusive
console.log(arr.fill(0,2,4));

// Expects a callback
var result = arr.filter(e=>e%2===0)

console.log(result);