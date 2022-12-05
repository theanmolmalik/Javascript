let Anmol = {
    firstName: "Anmol",
    lastName: "Malik",
    role: "admin",
    courseCount: 2,
    getInfo: function(){
        console.log(`
            FirstName: ${this.firstName}
            LastName: ${this.lastName}
            Role: ${this.role}
            and He is enrolled in ${this.courseCount} courses.
        `)
    },
};

let Vishwas = {
    firstName: "Vishwas",
    lastName: "Malik",
    role: "sub-admin",
    courseCount: 3,
}

Anmol.getInfo();

Anmol.getInfo.bind(Vishwas)();

Anmol.getInfo.call(Vishwas);