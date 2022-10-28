import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { PaymentInstrument } from '../payment-instrument';
import { VippsPaymentAuthorizationListResponse } from './vippsPaymentAuthorizationListResponse';

export class VippsPayment extends PaymentInstrument {
    @v.ValidateNested()
    @Type(() => VippsPaymentAuthorizationListResponse)
    authorizations: VippsPaymentAuthorizationListResponse;
}