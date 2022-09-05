// Inheritance mean वीरासत : child access perents properties and methods

// Using Class  ->>

class BankAccount{
    constructor(username, balance = 0){
        this.username = username,
        this.accountNo = Date.now();
        this.balance = balance;
    }

    deposit(amout){
        this.balance += amout;
    }
    withdrow(amout){
        this.balance -= amout;
    }
}
// In bank two types of accounts SavingAccount & CurrentAccount

//      Child        use      Parents
class SavingAccount extends BankAccount{
    constructor(username, balance=0){
        super(username, balance);
        // Tranctions has some limits
        tranctionLimit = 10000;
    }
};

class CurrentAccount extends BankAccount{
    constructor(username, balance = 0){

        super(username, balance);

        tranctionLimit = 5000;
    }
}

let user1 = new SavingAccount("Ram", 2000);
console.log(user1);

let user2 = new CurrentAccount("Ajay");
console.log(user2);

user2.deposit(2000);   // Here also Child use Parents property
console.log(user2);