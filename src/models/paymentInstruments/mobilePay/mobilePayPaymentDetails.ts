import { PrefillInfo } from '../prefillInfo';
import { GenericPaymentRequestDetails } from '../genericPaymentRequestDetails';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class MobilePayPaymentDetails extends GenericPaymentRequestDetails{
    @v.IsString()
    payerReference: string;

    @v.ValidateNested()
    @Type(() => PrefillInfo)
    prefillInfo: PrefillInfo;
}