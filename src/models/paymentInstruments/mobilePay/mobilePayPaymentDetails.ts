import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { GenericPaymentRequestDetails } from '../genericPaymentRequestDetails';
import { PrefillInfo } from '../prefillInfo';

export class MobilePayPaymentDetails extends GenericPaymentRequestDetails{
    @v.IsString()
    payerReference: string;

    @v.ValidateNested()
    @Type(() => PrefillInfo)
    prefillInfo: PrefillInfo;
}