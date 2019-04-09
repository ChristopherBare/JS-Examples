// function Teacher(name) {
// 	this.name;

// }

// Teacher.prototype = {
//     name: "Whatever",
//     teach: function () {
//         console.log(this.name + " says constructors are cool");
//     }
// }

// const teacher1 = new Teacher();
// const teacher2 = new Teacher("jeff");

// teacher1.teach();
// teacher2.teach();

// teacher1.name = "jimmy";

// console.log(teacher1.name, teacher2.name);

// function Person() {
//   this.brain = true;
// }
// function Student() {
//   this.computer = false;
// }
// function Graduate() {
//   this.skillz = "Mad";
// }
// const p = new Person();
// Student.prototype = p;//true
// const s = new Student();
// Graduate.prototype = s;//false
// const g = new Graduate();//"Mad"
// console.log(g.skillz, g.computer, g.brain);


// //Using previous example
// console.log(s.hasOwnProperty('skillz'),g.hasOwnProperty('computer')) //true,false

class Person {
    constructor(){
        this.brain = true;
    }
}
class Student extends Person {
    constructor() {
        super();
        this.computer = false;
    }
}
class Graduate extends Student {
    constructor() {
        super();
        this.skillz = "Mad";
    }
}

const p = new Person();
Student.prototype = p; //true
const s = new Student();
Graduate.prototype = s; //false
const g = new Graduate(); //"Mad"
console.log(g.skillz, g.computer, g.brain);

//Using previous example
console.log(g.hasOwnProperty('skillz'),g.hasOwnProperty('computer')) //true,false