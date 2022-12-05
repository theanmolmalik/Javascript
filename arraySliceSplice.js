var users = ["Ted","Tim","Ton","Sam","Sor","Sod"];

// starting coordinate is inclusive and last coordinate is exclusive
// console.log(users.slice(1,3));
// console.log(users.slice(1));

users.splice(1,4,"Hello","Hi");
console.log(users);