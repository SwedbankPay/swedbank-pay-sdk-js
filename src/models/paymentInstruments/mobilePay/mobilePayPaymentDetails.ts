import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { GenericPaymentRequestDetails } from '../generic-payment-request-details';
import { PrefillInfo } from '../prefill-info';

export class MobilePayPaymentDetails extends GenericPaymentRequestDetails{
    @v.IsString()
    payerReference: string;

    @v.ValidateNested()
    @Type(() => PrefillInfo)
    prefillInfo: PrefillInfo;
}