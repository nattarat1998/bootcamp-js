// Rest Operator // การส่งค่าหลายค่าเข้ามาทำงาน

const addUser = (name, last, ... city) => {
    return name+" "+last+" I'm from "+city;
}

console.log(addUser("Nattarat", "Yaemphochai", "Phichit", "Tak", "ChiangMai"));

const addMessage = (prefix, ... message) => {
    return message.map(m => prefix+message);
}

const addNumber = (... number) => {
    return number.reduce((first, current) => {
        return first+current;
    })
};

console.log(addMessage("Hello ", "JS", "PHP", "Python"));
console.log(addNumber(1,2,3,4,5));
