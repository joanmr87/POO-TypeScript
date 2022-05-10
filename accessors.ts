class Account {
  private amount: number;
  private comission: number;

  constructor(amount: number, comission: number) {
    this.amount = amount;
    this.comission = comission;
  }

  set setAmount(amount: number) {
    if (amount < 0) {
      amount = 0;
      this.amount = amount;
    }
  }
  get total() {
    return this.amount + this.comission;
  }
}
const account = new Account(10, 1);
account.setAmount = -8;
console.log(account.total);
