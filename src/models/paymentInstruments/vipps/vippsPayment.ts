import { PaymentInstrument } from '../paymentInstrument';
import { VippsPaymentAuthorizationListResponse } from './vippsPaymentAuthorizationListResponse';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class VippsPayment extends PaymentInstrument {
    @v.ValidateNested()
    @Type(() => VippsPaymentAuthorizationListResponse)
    authorizations: VippsPaymentAuthorizationListResponse;
}