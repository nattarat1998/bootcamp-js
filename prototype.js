function Person (name) {
    this.name = name;
}

Person.prototype.greet = function () {
    return `Hello ${this.name}`
};

let p1  = new Person('Nattarat')
console.log(p1);

let greeting = p1.greet();
console.log(greeting);





let s = p1.toString();
console.log(s);

let p2 = new Person('Satoshi');

p1.draw = function () {
    return 'I can draw.';
}

console.log(p1.draw());

console.log(p1.__proto__ === Person.prototype);