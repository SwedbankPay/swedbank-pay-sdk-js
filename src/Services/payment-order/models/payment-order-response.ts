import { Operation } from '../../../models/generics/-operation-resource';
import { Payment } from '../../../models/payment';
import { PaymentOrderProperties } from './payment-order-properties';

export class PaymentOrderResponse extends Payment {
  paymentOrder: PaymentOrderProperties;
  operations: Operation[];
}
