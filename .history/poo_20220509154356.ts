class Sale {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }
  getTotal(): number {
    return this.amount;
  }
}
let sale = new Sale(19);
const res = sale.getTotal();
console.log(res);
