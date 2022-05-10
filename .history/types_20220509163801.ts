type Beer = {
  readonly name: string;
  alcohol: number;
};

function show(beer: Beer): void {
  console.log(`info: ${beer.name} - ${beer.alcohol}`);
}
