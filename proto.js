let User = function (firstName,courseCount){
    this.firstName = firstName,
    this.courseCount = courseCount,
    this.getCourseCount = function(){
        console.log(`${this.firstName} has a course count of ${this.courseCount}`);
    }
};

User.prototype.getFirstName = function(){
    console.log(`First Name: ${this.firstName}`);
}

let Anmol = new User("Anmol",3);

Anmol.getCourseCount();

if(Anmol.hasOwnProperty("firstName"))
{
    Anmol.getFirstName();
}

console.log(Anmol);