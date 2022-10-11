const account = {
    name: "Alex",
    balance: 0,
    credit(amount){
        this.balance += amount;
    },
    describe(){
        return `Owner:${this.name}, balance: ${this.balance}`;
    }
}

console.log(account.describe());