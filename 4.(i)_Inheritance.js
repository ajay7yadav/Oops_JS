// Inheritance mean वीरासत : child access perents properties and methods

// Using Constructor function  ->>

function BankAccount(user, balance = 0){

    this.username = user;
    this.accountNumber = Date.now();
    this.balance = balance;
}

BankAccount.prototype.deposit = function(amout){
    this.balance += amout;
}

BankAccount.prototype.withdrow = function(amout){
    this.balance -= amout;
}

// In bank two types of accounts SavingAccount & CurrentAccount

function CurrentAccount(username, balance=0){
    BankAccount.call(this,username, balance);
    // Tractions has some limits;
    this.transtionLimit = 5000;
};
function SavingAccount(username, balance=0){
    BankAccount.call(this, username, balance);
    this.transtionLimit = 10000;
}


let user1 = new CurrentAccount("Ram", 1000);
console.log(user1);

let user2 = new SavingAccount("Ajay");
console.log(user2);

user2.deposit = 1000;
console.log(user2);