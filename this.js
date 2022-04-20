// This Bind Method 

const print = (fname) => {
    console.log(fname());
}

const obj = {
    fname: 'Nattarat',
    lname: 'Yaemphochai',
    getFullName() {
        console.log(this);
        return `${this.fname} ${this.lname}`
    },
}

// Bind this => obj
print(obj.getFullName.bind(obj));

// Bind anyone else 's something else to use.

// const canon = {
//     text: 'Canon Text',
//     print() {
//         console.log(this.text);
//     }
// };

// const hp = {
//     text: 'HP Inkjet'
// }

// console.log(canon.print());
// console.log(canon.print.bind(hp)());

// Call Method

function getBrand(prefix) {
    console.log(prefix + this.brand);
}

let honda = {
    brand: 'Honda'
};
let audi = {
    brand: 'Audi'
};

getBrand.call(honda, "It's a ");
getBrand.call(audi, "It's an ");

// Apply 

function whatseason (seasons) {
    console.log(this.pref + seasons);
};

let pref = {
    pref: 'This is'
};

whatseason.apply(pref, ["summer", "rainy", "winter"]);

