/**
   ✅ The Abstract Factory pattern ensures that related objects 
   (e.g., modern chair + modern table) are created consistently.
   ✅ It simplifies switching between different product families.
   ✅ Adding new styles (like Industrial or Scandinavian) only 
   requires creating new factory and product classes.
 */

import {
  FurnitureFactory,
  ModernFurnitureFactory,
  VictorianFurnitureFactory,
} from "./definition";
import { MacFactory, WindowsUIFactory } from "./webComponentsExample";

type Styles = "Modern" | "Victorian";
type Os = "Windows" | "MacOS";

export function abstractFactorySetupFurniture(style: Styles) {
  console.log(`\n\n### Abstract Factory Pattern ###`);
  console.log(`abstractFactorySetupFurniture('${style}') and Its Instances:`);
  const factory: FurnitureFactory =
    style === "Modern"
      ? new ModernFurnitureFactory()
      : new VictorianFurnitureFactory();
  const chair = factory.createChair();
  const table = factory.createTable();
  console.log({
    chair: chair.constructor.name, 
    table: table.constructor.name
  });
  chair.sitOn();
  table.placeItem("a vase");
}

export function abstractFactoryRenderUIComponents(os: Os) {
  console.log(`\n\n### Abstract Factory Pattern ###`);
  console.log(`abstractFactoryRenderUIComponents('${os}') and Its Instances:`);
  const factory = os === "Windows" ? new WindowsUIFactory() : new MacFactory();
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  console.log({
    button: button.constructor.name, 
    checkbox: checkbox.constructor.name
  });
  button.render();
  checkbox.render();
}