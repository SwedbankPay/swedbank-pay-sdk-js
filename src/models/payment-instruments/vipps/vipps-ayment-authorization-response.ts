import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { VippsPaymentAuthorization } from './vipps-payment-authorization';

export class VippsPaymentAuthorizationResponse extends Identifiable {
  @v.ValidateNested()
  @Type(() => VippsPaymentAuthorization)
  authorization: VippsPaymentAuthorization;
}
