// In JavaScript, almost "everything" is an object.
// Object constain single or many values in pairs { key : value } key should be string and value anything.

// 1 way simplet using {}
const obj = {
    name : "Ajay",
    city : "Dhanbad"
};
console.log(obj.name);

// 2 way using Object keyword
const obj2 = Object.create({
    name : "ram",
    city : "heart"
});
console.log(obj2.name);

// 3 way Constructor
// (a) class constructor
class Obj3 {
    constructor(name,city){
        this.name = name;
        this.city = city
    }
}
let obj3 = new Obj3("hanuman","air");
console.log(obj3.name);


// (b) function constructor
function Obj4(name,city){
    this.name = name;
    this.city = city;
}

let obj4 = new Obj4("sity","heart");
console.log(obj4.name);
