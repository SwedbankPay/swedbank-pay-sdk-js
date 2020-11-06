import { Operation } from "../../../models/Operation";
import { Payment } from "../../CardPayment/models/Payment";

export interface PaymentOrderResponse {
  paymentOrder: Payment;
  operations: Operation[];
  /**
   *
   */
  constructor(paymentOrder: Payment, operations: Operation[]) {
    this.paymentOrder = paymentOrder;
  }
}
