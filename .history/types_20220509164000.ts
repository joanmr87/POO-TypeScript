type Beer = {
  readonly name: string;
  alcohol: number;
  brand?: string;
};

function show(beer: Beer): void {
  console.log(`info: ${beer.name} - ${beer.alcohol}`);
}

const myBeer: Beer = {
  name: "Pilsen",
  alcohol: 5.5,
};

show(myBeer);
