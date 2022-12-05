// import User from "./class";

const User = require("./class");

const Anmol = new User("Anmol","anmolmalik2001@gmail.com");

console.log(Anmol.getInfo());

Anmol.enrollCourse("C++");
Anmol.enrollCourse("Django");

for(let course of Anmol.getCourseList())
{
    console.log(course);
}