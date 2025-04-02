// PaymentProcessor.ts
export interface PaymentProcessor {
  processPayment(amount: number): void;
}

// This login will be in a single file SUBCLASE
export class PayPalProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} through PayPal.`);
  }
}

// This login will be in a single file SUBCLASE
export class StripeProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} through Stripe.`);
  }
}

// This login will be in a single file SUBCLASE
export class SquareProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} through Square.`);
  }
}

// SUPER CLASS
// This login will be in a single file
// PaymentProcessorFactory.ts
export class PaymentProcessorFactory {
  static createProcessor(type: string): PaymentProcessor {
    switch (type) {
      case "paypal":
        return new PayPalProcessor();
      case "stripe":
        return new StripeProcessor();
      case "square":
        return new SquareProcessor();
      default:
        throw new Error("Invalid payment method");
    }
  }
}
