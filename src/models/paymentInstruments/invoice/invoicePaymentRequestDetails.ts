import * as v from 'class-validator';
import { PrefillInfo } from "../prefillInfo";
import { GenericPaymentRequestDetails } from "../genericPaymentRequestDetails";
import { Type } from 'class-transformer';

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