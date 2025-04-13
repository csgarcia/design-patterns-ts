// Abstract Factory
import {
  abstractFactoryRenderUIComponents,
  abstractFactorySetupFurniture,
} from "./creational_patterns/abstract_factory/clientUsage";
import { BurgerBuilder } from "./creational_patterns/builder/BurgerBuilder";

// Factory Method
import {
  factoryMethodUsage,
  factoryMethodUsagePaymentProcessor,
} from "./creational_patterns/factory_method/clientUsage";
import {
  ConcreteProductA,
  ConcreteProductB,
} from "./creational_patterns/factory_method/definition";



// Builder

// Creational Patterns
// Abstract Factory
// abstractFactorySetupFurniture("Victorian");
// abstractFactorySetupFurniture("Modern");
// abstractFactoryRenderUIComponents("Windows");
// abstractFactoryRenderUIComponents("MacOS");

// Factory Method
// console.log("App: Launched with the ConcreteProductA.");
// factoryMethodUsage(new ConcreteProductA());
// console.log("App: Launched with the ConcreteProductB.");
// factoryMethodUsage(new ConcreteProductB());
// factoryMethodUsagePaymentProcessor("paypal", 100);
// factoryMethodUsagePaymentProcessor("stripe", 200);
// factoryMethodUsagePaymentProcessor("square", 300);
// factoryMethodUsagePaymentProcessor("invalid", 400);

// Builder
// const chesseBurger = new BurgerBuilder()
//   .setBun("Sesame")
//   .sewtPatties(2)
//   .addCheese()
//   .setSauce("Ketchup")
//   .build();

// chesseBurger.describe("chesseBurger");

// const veggieBurger = new BurgerBuilder()
//   .setBun("Whole Wheat")
//   .sewtPatties(1)
//   .addLettuce()
//   .addTomato()
//   .setSauce("Mustard")
//   .build();
// veggieBurger.describe("veggieBurger");

// Prototype
require("./creational_patterns/prototype/clientUsage.ts");