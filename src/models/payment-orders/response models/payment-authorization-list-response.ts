import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { PaymentAuthorization } from '../../payment-instruments/payment-authorization';

export class PaymentAuthorizationListResponse extends Identifiable {
  @v.ValidateNested()
  @Type(() => PaymentAuthorization)
  authorizationList: PaymentAuthorization[];
}
