let user={
    name: "Anmol",
    email: "anmolmalik2001@gmail.com",
    phNo: 8445913524,
    courseList: [],
    addCourse: function (courseName){
        this.courseList.push(courseName)
    },
    getCourseCount:function () {
        return `${this.name} is enrolled into ${this.courseList.length} courses.`
    },
};
 
console.log(user.getCourseCount());
user.addCourse("C++");
console.log(user.getCourseCount());
user.addCourse("Js");
console.log(user.getCourseCount());

