import { Operation } from '../../../models/generics/Operation-resource';
import { Payment } from '../../../models/payment';
import { PaymentOrderProperties } from './PaymentOrderProperties';

export class PaymentOrderResponse extends Payment {
  paymentOrder: PaymentOrderProperties;
  operations: Operation[];
}
