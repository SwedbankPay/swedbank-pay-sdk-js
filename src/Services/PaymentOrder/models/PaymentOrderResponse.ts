import { Operation } from "../../../models/Operation";
import { PaymentOrderProperties } from "./PaymentOrderProperties";

export class PaymentOrderResponse {
  paymentOrder: PaymentOrderProperties;
  operations: Operation[];
}
