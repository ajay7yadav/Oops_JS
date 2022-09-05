// Constructor : Its is a function with the help of this function we create Obejct.
// good practice to write name of constructor function is first letter Capital like : function Bookticket(){}

function BankAccount(user, balance = 0){  // default is 0

    this.username = user;
    this.accountNumber = Date.now();
    this.balance = balance;

    // constructor method
    this.deposit = function(amout){
        this.balance += amout;
    }

    this.withdrow = (amout)=>{
        this.balance -= amout;
    }
}

let user1 = new BankAccount("Ram", 2000);  // new Object createed and all object has diffrent memory location 
let user2 = new BankAccount("Ajay");
console.log(user1,user2);

user1.deposit(200);
console.log(user1);
user1.withdrow(300);
console.log(user1);