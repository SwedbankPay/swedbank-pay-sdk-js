import { GenericPaymentRequestDetails } from '../genericPaymentRequestDetails';
import * as v from 'class-validator';

export class VippsPaymentRequestDetails extends GenericPaymentRequestDetails{
    @v.IsBoolean()
    generatePaymentToken?: boolean;

    @v.IsBoolean()
    generateRecurrenceToken?: boolean;

    @v.IsString()
    paymentToken?: string;
}