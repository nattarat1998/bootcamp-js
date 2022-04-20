const person = function (fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
}

person.prototype.getFullMember = function () {
    return `I love you ${this.firstname} ${this.lastname}`
}

const Person = new person('Nattarat', 'Yaemphochai');
// Person explored the getFullMember function in Prototype cause not found this func in Object person
console.log(Person.getFullMember());

// Invoke constructor function without new
function Book(title, author) {
    // if (!new.target) {
    //     return new Book(title, author);
    // }

    this.title = title;
    this.author = author;
}

let book = Book("Harry Potter", "J.K.Rowling");
// console.log(book);
console.log(`Title : ${book?.title} | Author : ${book?.author}`);