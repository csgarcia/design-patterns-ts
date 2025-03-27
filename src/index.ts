import {
  abstractFactoryRenderUIComponents,
  abstractFactorySetupFurniture,
} from "./creational_patterns/abstract_factory/clientUsage";

// Creational Patterns
// Abstract Factory
abstractFactorySetupFurniture("Victorian");
abstractFactorySetupFurniture("Modern");
abstractFactoryRenderUIComponents("Windows");
abstractFactoryRenderUIComponents("MacOS");
