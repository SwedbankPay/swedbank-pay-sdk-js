import * as v from 'class-validator';
import { PayeeInfo } from '../../Services/payment-order/models/payee-info';

export class PaymentOrderPayeeInfo extends PayeeInfo {
  @v.IsString()
  corporationId: string;

  @v.IsString()
  corporationName: string;
}
