import * as v from 'class-validator';
import { GenericPaymentRequestDetails } from '../generic-payment-request-details';

export class VippsPaymentRequestDetails extends GenericPaymentRequestDetails{
    @v.IsBoolean()
    generatePaymentToken?: boolean;

    @v.IsBoolean()
    generateRecurrenceToken?: boolean;

    @v.IsString()
    paymentToken?: string;
}