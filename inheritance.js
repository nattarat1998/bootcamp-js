// let person = {
//     name: 'Nattarat Yaemphochai',
//     greet: function () {
//         return 'Hello, ' + this.name
//     }
// };
// Constructor
// console.log(person.toString()); // Output : [Object Object] cause it's the default string representation of an Object

// To access the prototype of person pls use __proto__ property as below

// console.log(person.__proto__);

// let developer = {
//     dev: function(lang='JavaScript') {
//         return `I can use ${lang} to develop the application`
//     }
// };

// developer.__proto__ = person;

// console.log(developer.name);
// console.log(developer.greet());
// console.log(developer.dev());

// Standard Way to implement prototypal inheritance in ES5

// let p = {
//     name: 'Watanabe Aiko',
//     greet: function () {
//         return "Hi, I'm " + this.name
//     }
// };

// let teacher = Object.create(p);

// teacher.name = 'Sarah Tiffy';
// teacher.teach = function (subject) {
//     return "I can teach " + subject;
// }

// Another way
// let teacher = Object.create(person, {
//     name: { value: 'Sarah Tiffy'} ,
//     teach: { value: function (subject) {
//         return "I can teach " + subject
//     }}
// });

// console.log(Object.getPrototypeOf(teacher) === p); // Output : true

// ES6 pls use class and extends to implement inheritance.

class Anime {
    constructor(name) {
        this.anime = name;
    }
    fav() {
        return `I like watching `+this.anime;
    }
}

class Category extends Anime {
    constructor(name, cate) {
        super(name);
        this.category = cate;
    }

    present() {
        return this.fav() + ',it is an ' + this.category;
    }
}

myfavsanime = new Category("Naruto", "Action");
console.log(myfavsanime.present());