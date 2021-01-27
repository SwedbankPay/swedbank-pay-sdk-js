import { Operation } from "../../../models/Operation";

export interface PaymentOrderResponse {
  paymentOrder: PaymentOrderProperties;
  operations: Operation[];
}

export interface PaymentOrderProperties {

}