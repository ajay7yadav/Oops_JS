// making private fields and methods so no one can directly access or change anything

// Encapsulation is the process of binding data members and methods of a program together

// for access we provide setter and getter method


class BankAccount{
    customerName;
    accountNumber;
    #balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        //this.balance = balance;
        this.#balance = balance;  // # make Private
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    set balance(amount) {
        if (isNaN(amount)) {
            throw new Error('Amount is not a valid input');
        }
        this.#balance = amount;
    }

    get balance() {
        return this.#balance;
    }
}

let user1 = new BankAccount("Ram", 1000);
//user1.balance = 3000;  // without private any one can change value outside
user1.balance = 2000
console.log(user1);
console.log(user1.balance);
