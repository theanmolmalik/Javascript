let arr = new Array("Anmol","Vishwas","Akshat","Gaurav","Alok","Sanjay");

// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// arr.forEach(e=>console.log(e));

// for(let e of arr)
// {
//     console.log(e);
// }

let user = {
    firstName: "Anmol",
    lastName: "Malik",
    email: "anmolmalik2001@gmail.com",
    phNo: 8445913524, 
}

for(let e in user)
{
    console.log(`Key: ${e} has value: ${user[e]}`);
}