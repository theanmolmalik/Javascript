class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    #courseList = [];

    getInfo(){
        return `Name: ${this.name} and Email: ${this.email}`;
    }

    enrollCourse(name){
        this.#courseList.push(name);
    }

    getCourseList(){
        return this.#courseList;
    }

    static login(){
        return `Login as Admin`;
    }
}

class SubAdmin extends User{

    // constructor(name,email){
    //     super(name,email);
    // }

    getSubAdminInfo(){
        return `I am SubAdmin`;
    }
}

module.exports = User;

let rock = new User("Rock","rock@rock.com");
//console.log(rock.getInfo());

// rock.enrollCourse("Angular");

// console.log(rock.getCourseList());
// console.log(rock.courseList);

let tom = new SubAdmin("Tom","tom@jerry.com");

console.log(tom.getSubAdminInfo());
console.log(tom.getInfo());