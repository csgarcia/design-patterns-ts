// https://refactoring.guru/design-patterns/abstract-factory

/**
 * THIS is a definition, use for a basic concept of use
 * If you want an example more applied to reality, check the webComponentsExample.ts file
 * Imagine that you’re creating a furniture shop simulator,
 * The important key in this is this is a FURNITURE SHOP SIMULATOR
 * So we need to create a furniture shop that can create furniture items
 * that are based in different styles (Variants) and based on Products, Chair and Table
 */

// first create Abstract Product Interfaces
interface Chair {
  sitOn(): void;
}

interface Table {
  placeItem(item: string): void;
}

// Then define Concrete Products with variants
// Modern Variant:
class ModernChair implements Chair {
  sitOn() {
    console.log("Sitting on Modern Chair");
  }
}

class ModernTable implements Table {
  placeItem(item: string) {
    console.log(`Placing ${item} on Modern Table`);
  }
}

// Victorian variant:
class VictorianChair implements Chair {
  sitOn() {
    console.log("Sitting on Victorian Chair");
  }
}

class VictorianTable implements Table {
  placeItem(item: string) {
    console.log(`Placing ${item} on Victorian Table`);
  }
}

// If we need more variants of Chair and Table, we can create more classes

// Now we need to create Abstract Factory Interface
export interface FurnitureFactory {
  createChair(): Chair;
  createTable(): Table;
}

// Then define Concrete Factories (Used for client)
export class ModernFurnitureFactory implements FurnitureFactory {
  createChair() {
    return new ModernChair();
  }

  createTable() {
    return new ModernTable();
  }
}

export class VictorianFurnitureFactory implements FurnitureFactory {
  createChair() {
    return new VictorianChair();
  }

  createTable() {
    return new VictorianTable();
  }
}