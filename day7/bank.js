class BankAccount {
    static bankName = "Bank Name";
    constructor(accNo, holder, bal) {
        this.accNo = accNo;
        this.holder = holder;
        this.bal = bal;
    }
    deposit(amount) {
        this.bal = this.bal + amount;
        console.log("Deposited:", amount);
    }
    withdraw(amount) {
        if (amount <= this.bal) {
            this.bal = this.bal - amount;
            console.log("Withdrawn:", amount);
        } else {
            console.log("Insufficient Balance");
        }
    }
    display() {
        console.log("Account No:", this.accNo);
        console.log("Holder Name:", this.holder);
        console.log("Balance:", this.bal);
    }

    static bankInfo() {
        console.log("Bank Name:", BankAccount.bankName);
        console.log("Banking Information: Savings, Current and Loan Accounts");
    }
}

let a1 = new BankAccount(101, "Hello1", 5000);
let a2 = new BankAccount(102, "Hello2", 10000);

BankAccount.bankInfo();

console.log("Account 1");
a1.display();
a1.deposit(2000);
a1.withdraw(1000);
a1.display();

console.log("Account 2");
a2.display();
a2.deposit(5000);
a2.withdraw(20000);
a2.display();