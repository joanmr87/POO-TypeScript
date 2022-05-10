interface Drink {
  name: string;
}

interface AlcoholicDrink extends Drink {
  alcohol: number;

  showInfo(): string;
}

interface MixedDrinks {
  ingredients: string[];
}

class Wine implements AlcoholicDrink {
  alcohol: number;
  name: string;

  constructor(alcohol: number, name: string) {
    this.alcohol = alcohol;
    this.name = name;
  }

  showInfo(): string {
    return `info: ${this.name} ${this.alcohol}`;
  }
}

class Cocktail implements AlcoholicDrink, MixedDrinks {
  alcohol: number;
  name: string;
  ingredients: string[];

  constructor(name: string, alcohol: number, ingredients: string[]) {
    this.name = name;
    this.alcohol = alcohol;
    this.ingredients = ingredients;
  }
  showInfo(): string {
    const ingredientsInfo = this.ingredients.reduce(
      (ac, e) => ac + " " + e + ", ",
      ""
    );
    return (
      `info: ${this.name} ${this.alcohol} ` + `ingredients: ${ingredientsInfo}`
    );
  }
}
