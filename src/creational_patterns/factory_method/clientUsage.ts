import { Product } from "./definition";
import {
  PaymentProcessor,
  PaymentProcessorFactory,
  PayPalProcessor,
  SquareProcessor,
  StripeProcessor,
} from "./paymentMethodExample";

export function factoryMethodUsage(creator: Product): void {
  console.log(
    `Client: I'm not aware of the creator's class, but it works.\n` +
      creator.operation()
  );
}

export function factoryMethodUsagePaymentProcessor(
  paymentMethod: string,
  amount: number
): void {
  try {
    const paymentProcessor =
      PaymentProcessorFactory.createProcessor(paymentMethod);
    paymentProcessor.processPayment(amount);
  } catch (error) {
    console.error("Error processing payment:", error);
  }
}
