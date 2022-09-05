// in JS prototype is netively present in every object and function
// when we are creating a function JS internaly create Empty Object that why we can use prototype and add properties

function BankAccount(user, balance = 0){  // default is 0

    this.username = user;
    this.accountNumber = Date.now();
    this.balance = balance;

    // constructor method
    // this.deposit = function(amout){
    //     this.balance += amout;
    // }

    // this.withdrow = (amout)=>{
    //     this.balance -= amout;
    // }
}

let user1 = new BankAccount("Ram", 2000);  // new Object createed and all object has diffrent memory location 
let user2 = new BankAccount("Ajay");

// I don't want show my deposit or withdrow method directly

BankAccount.prototype.deposit = function(amout){
    this.balance += amout;
}
BankAccount.prototype.withdrow = function(amout){
    this.balance -= amout
}

user1.deposit(1000)
console.log(user1);

user1.withdrow(1500)
console.log(user1);


// // use prototype { __proto__ } Object

// const obj = {
//     name : "Ajay",
//     age  : 100,
//     eat : ()=>{
//         console.log("eating very fast");
//     }
// };

// console.log(obj.__proto__);

// // use prototype { prototype } function

// function person(name,city){
//     this.name = name;
//     this.city = city;
// }

// let p1 = new person("Ram","Ayodhaya");
// console.log(p1);
// // add new property 

// person.prototype.age = 100;

// console.log(p1);
// console.log(p1.age);




// function Cricketer(name, age){
//     this.name = name;
//     this.age = age;
// };

// let Dhone = new Cricketer("Dhoni",45);
// let Virat = new Cricketer("Virat",40);
// console.log(Dhone);

// Cricketer.prototype.team = "Indian Cricket Team";

// console.log(Dhone.team);
// console.log(Virat.team);