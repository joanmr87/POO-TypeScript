class Sale {
  // Private se usa para crear una propiedad privada
  // Solo se puede acceder desde la clase
  // Protected se usa para crear una propiedad protegida
  // Se puede acceder desde la clase y desde las clases que heredan de esta
  private amount: number;

  //constructor se usa para crear una propiedad
  constructor(amount: number) {
    this.amount = amount;
  }

  getTotal(): number {
    return this.amount;
  }
}

//Herencia
class SaleWithTax extends Sale {
  private tax: number;
  constructor(tax: number, amount: number) {
    //super sirve para llamar al constructor de la clase padre
    super(amount);
    this.tax = tax;
  }
  //override sirve para sobreescribir un metodo
  override getTotal(): number {
    //super sirve para llamar al metodo de la clase padre
    return this.tax + super.getTotal();
  }
}

let sale = new Sale(19);
const res = sale.getTotal();
console.log(res);

let saleWithTax = new SaleWithTax(10, 100);
const res2 = saleWithTax.getTotal();
console.log(res2);
