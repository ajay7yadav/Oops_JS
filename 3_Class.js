// Class : class is template, blue print or structure.
// in Real world : A Person has Name, Age, and eat() mathod, dance() method

// Class is syntactic sugar of Constructor function but using class we make code more readable.

// Using Constructor function  ->>
// function BankAccount(user, balance = 0){

//     this.username = user;
//     this.accountNumber = Date.now();
//     this.balance = balance;

//     // constructor method
//     this.deposit = function(amout){
//         this.balance += amout;
//     }
//     // constructor method
//     this.withdrow = (amout)=>{
//         this.balance -= amout;
//     }
// }
// let user1 = new BankAccount("Ram", 2000);

// Now using class same task  ->>

class BankAccount{

    constructor(username, balance=0){
        this.username = username;
        this.accountNumber = Date.now();
        this.balance = balance;
    }
    // class method
    deposit(amout){
        this.balance += amout;
    }
    // class method
    withdrow(amout){
        this.balance -= amout;
    }
}

let user1 = new BankAccount("Ram", 1000);
let user2 = new BankAccount("Ajay");
console.log(user1,user2);

user1.deposit(2000);
console.log(user1);
user1.withdrow(1500);
console.log(user1);

// Now you see the diffrents using Constructor function or using class