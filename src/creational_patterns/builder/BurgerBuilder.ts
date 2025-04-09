import { Burger } from './Burger';
export class BurgerBuilder {
  private burger: Burger;

  constructor() {
    this.burger = new Burger();
  }

  setBun(bun: string): BurgerBuilder {
    this.burger.bun = bun;
    return this;
  }

  sewtPatties(patties: number): BurgerBuilder {
    this.burger.patties = patties;
    return this;
  }
  addCheese(): BurgerBuilder {
    this.burger.cheese = true;
    return this;
  }
  addLettuce(): BurgerBuilder {
    this.burger.lettuce = true;
    return this;
  }
  addTomato(): BurgerBuilder {
    this.burger.tomato = true;
    return this;
  }
  addBacon(): BurgerBuilder {
    this.burger.bacon = true;
    return this;
  }
  setSauce(sauce: string): BurgerBuilder {
    this.burger.sauce = sauce;
    return this;
  }
  build(): Burger {
    return this.burger;
  }

}