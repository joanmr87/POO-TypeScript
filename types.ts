type Beer = {
  readonly name: string;
  alcohol: number;
  brand?: string;
};

type Snack = {
  nameSnack: string;
  price: number;
};

function show(beer: Beer): void {
  console.log(`info: ${beer.name} - ${beer.alcohol}`);
}

const myBeer: Beer = {
  name: "Pilsen",
  alcohol: 5.5,
};

show(myBeer);

//Interseccjon de tipos
// Convina dos tipos
const combo: Beer & Snack = {
  name: "Combo",
  alcohol: 5.5,
  brand: "Coca Cola",
  nameSnack: "Chips",
  price: 10,
};
console.log(combo);
