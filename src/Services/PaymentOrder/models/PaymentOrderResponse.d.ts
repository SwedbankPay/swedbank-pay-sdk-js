import { PaymentOrder } from "../PaymentOrder";
import { Operation } from "../../../models/Operation";
import { Payment } from "../../CardPayment/models/Payment";

export class PaymentOrderResponse {
  paymentOrder: Payment;
  operations: Operation[];
  /**
   *
   */
  constructor(paymentOrder: Payment, operations: Operation[]) {
    this.paymentOrder = paymentOrder;
  }
}