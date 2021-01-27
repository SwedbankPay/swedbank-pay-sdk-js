import { Operation } from "../../../models/Operation";
import { PaymentOrderProperties } from "./PaymentOrderProperties";

export interface PaymentOrderResponse {
  paymentOrder: PaymentOrderProperties;
  operations: Operation[];
}
