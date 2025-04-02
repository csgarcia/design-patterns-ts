export interface Product {
  operation(): string;
}

export abstract class Creator {
  abstract factoryMethod(): Product;

  someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

export class ConcreteProductA implements Product {
  operation(): string {
    return "{Result of the ConcreteProductA}";
  }
}
export class ConcreteProductB implements Product {
  operation(): string {
    return "{Result of the ConcreteProductB}";
  }
}
