import { PaymentInstrument } from "../paymentInstrument";
import { MobilePayPaymentAuthorizationListResponse } from "./mobilePayPaymentAuthorizationListResponse";
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class MobilePayPayment extends PaymentInstrument {
    @v.ValidateNested()
    @Type(() => MobilePayPaymentAuthorizationListResponse)
    authorizations: MobilePayPaymentAuthorizationListResponse;
}