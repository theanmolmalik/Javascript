var countries = ["India", "USA", "Australia", "Japan"];

//new Syntax of Creating array
var states = new Array("Uttar Pradesh", "Punjab", "Uttarakhand", "Haryana");
console.log(states);

// Adding at the end
states.push("Goa");
console.log(states);

// Removing last element
states.pop();
console.log(states);

// Adding at the front
states.unshift("Rajisthan");
console.log(states);

// Removing front Element
states.shift();
console.log(states);

// To find index of an Element if not found return -1
console.log(states.indexOf("Haryana"));
console.log(states.indexOf("Maharashtra"));
