// Create the Account class
 class Account{
    constructor (name){
        this.name = name;
        this.balance = 0;
    }
    credit(amt){
        this.balance += amt;
    }
    describe(){
        return `owner: ${this.name}, balance: ${this.balance}`
    }
 }//create account array
 const accounts = [];

 //Create three accounts
 accounts[0] = new Account("Sean");
 accounts[1] = new Account("Brad");
 accounts[2] = new Account("Georges");

 //Loop to add 1000 to each account and display
 accounts.forEach(account=>{
    account.credit(1000);
    console.log(account.describe());
    
 })