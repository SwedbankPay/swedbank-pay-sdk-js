import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { PaymentInstrument } from '../payment-instrument';
import { MobilePayPaymentAuthorizationListResponse } from './mobile-pay-payment-authorization-list-response';

export class MobilePayPayment extends PaymentInstrument {
    @v.ValidateNested()
    @Type(() => MobilePayPaymentAuthorizationListResponse)
    authorizations: MobilePayPaymentAuthorizationListResponse;
}