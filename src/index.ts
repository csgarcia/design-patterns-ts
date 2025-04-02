// Abstract Factory
import {
  abstractFactoryRenderUIComponents,
  abstractFactorySetupFurniture,
} from "./creational_patterns/abstract_factory/clientUsage";

// Factory Method
import {
  factoryMethodUsage,
  factoryMethodUsagePaymentProcessor,
} from "./creational_patterns/factory_method/clientUsage";
import {
  ConcreteProductA,
  ConcreteProductB,
} from "./creational_patterns/factory_method/definition";

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
factoryMethodUsagePaymentProcessor("paypal", 100);
factoryMethodUsagePaymentProcessor("stripe", 200);
factoryMethodUsagePaymentProcessor("square", 300);
factoryMethodUsagePaymentProcessor("invalid", 400);
