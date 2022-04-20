// ES5

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// User.prototype.SayHi = function () {
//     console.log("Hello, "+ this.name + " Age : "+this.age);
// }

// let user1 = new User("Nattarat", 23);
// user1.SayHi()

// ES6

class Admin {
    constructor() {
        console.log("Call Constructor");
    }
    isPermission() {
        console.log("Read Write Data From DB");
    }
}

class User extends Admin {
    constructor (name, age) {
        super();
        this.name = name;
        this.age = age;
    }
    SayHi() {
        console.log("Hello, "+this.name+"\nAge : "+this.age);
    }
}

let user1 = new User("Nattarat", 23);
user1.SayHi();
user1.isPermission();

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     SayHi () {
//         console.log("Hello, "+this.name+"\nAge : "+this.age);
//     }
// }

// let user1 = new User("Nattarat", 23);
// user1.SayHi()