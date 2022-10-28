import { Payment } from '../../../models/Payment';
import { Operation } from '../../../models/generics/Operation-resource';
import { PaymentOrderProperties } from './PaymentOrderProperties';

export class PaymentOrderResponse extends Payment {
  paymentOrder: PaymentOrderProperties;
  operations: Operation[];
}
