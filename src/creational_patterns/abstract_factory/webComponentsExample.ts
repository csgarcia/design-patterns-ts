/**
 For this example imagine that we need to define diferents web components for different OS, like Windows and MacOS.
 We need to create a Abstract Factory that can create the components for each OS.
 */

// Abstract Product Interfaces
interface Button {
  render(): void;
}

interface Checkbox {
  render(): void;
}

// Concrete Products - Windows
class WindowsButton implements Button {
  render() {
    console.log("Rendering a Windows-style button");
  }
}

class WindowsCheckbox implements Checkbox {
  render() {
    console.log("Rendering a Windows-style checkbox");
  }
}

class MacButton implements Button {
  render() {
    console.log("Rendering a Mac-style button");
  }
}

class MacCheckbox implements Checkbox {
  render() {
    console.log("Rendering a MacOS-style checkbox");
  }
}

interface UIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

export class WindowsUIFactory implements UIFactory {
  createButton() {
    return new WindowsButton();
  }

  createCheckbox() {
    return new WindowsCheckbox();
  }
}

export class MacFactory implements UIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}
