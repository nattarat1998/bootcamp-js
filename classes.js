class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    getFullName() {
        return this.fname + ' ' + this.lname
    }
}

let p1 = new Person('Nattarat', 'Yaemphochai');
console.log(p1.getFullName());

