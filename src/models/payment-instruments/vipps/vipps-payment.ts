import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { PaymentInstrument } from '../payment-instrument';
import { VippsPaymentAuthorizationListResponse } from './vipps-payment-authorization-list-response';

export class VippsPayment extends PaymentInstrument {
  @v.ValidateNested()
  @Type(() => VippsPaymentAuthorizationListResponse)
  authorizations: VippsPaymentAuthorizationListResponse;
}
