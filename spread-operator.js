// Spread Operator
// กระจายค่าจาก array / obj ต้นทาง ไป array /obj ปลายทาง

let fruits = [
    'Mango',
    'Watermelon',
    'Orange',
    'Kiwi'
];

let newFruits = [...fruits, "Durian", "Grape"] // Copy friuts and append new kind of fruit to newFruits
let food = ['Spagetti', 'Noodle', 'Fried Rice'];
let allfood = [...newFruits, ...food]; // in case of value exists in array, operator will not spread that value into new array

console.log(allfood);

// Spread Operator in Object

let products = {
    name: "Durian",
    priceperkilo: 400
}

let newproduct = { ...products, category: "fruit" }
console.log(newproduct);

let newprice = {...newproduct, priceperkilo: 350 }
console.log(newprice);