import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { GenericPaymentRequestDetails } from '../generic-payment-request-details';
import { PrefillInfo } from '../prefill-info';

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