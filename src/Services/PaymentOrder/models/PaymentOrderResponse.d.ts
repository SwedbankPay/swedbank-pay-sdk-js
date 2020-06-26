import { PaymentOrder } from "../PaymentOrder";
import { Operation } from "../../../models/Operation";

export interface PaymentOrderResponse {
  paymentOrder: PaymentOrder;
  operations: Operation[];
}