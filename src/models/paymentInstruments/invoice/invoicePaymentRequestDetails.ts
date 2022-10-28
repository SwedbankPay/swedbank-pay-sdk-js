import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { GenericPaymentRequestDetails } from '../genericPaymentRequestDetails';
import { PrefillInfo } from '../prefillInfo';

export class InvoicePaymentRequestDetails extends GenericPaymentRequestDetails{
    @v.IsBoolean()
    generatePaymentToken: boolean;
    
    @v.IsBoolean()
    generateRecurrenceToken: boolean;

    @v.IsString()
    payerReference: string;

    @v.IsString()
    paymentToken: string;

    @v.ValidateNested()
    @Type(() => PrefillInfo)
    prefillInfo: PrefillInfo;
}