export class Burger {
  bun?: string;
  patties?: number;
  cheese?: boolean;
  lettuce?: boolean;
  tomato?: boolean;
  bacon?: boolean;
  sauce?: string;

  describe(name: string): void {
    console.log(`🍔 Your custom burger: ${name}`);
    console.log(`- Bun: ${this.bun}`);
    console.log(`- Patties: ${this.patties}`);
    if (this.cheese) console.log("- Cheese: Yes");
    if (this.lettuce) console.log("- Lettuce: Yes");
    if (this.tomato) console.log("- Tomato: Yes");
    if (this.bacon) console.log("- Bacon: Yes");
    console.log(`- Sauce: ${this.sauce}`);
  }
}
