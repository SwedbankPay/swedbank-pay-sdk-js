import * as v from 'class-validator';
import { GenericPaymentRequestDetails } from '../genericPaymentRequestDetails';

export class VippsPaymentRequestDetails extends GenericPaymentRequestDetails{
    @v.IsBoolean()
    generatePaymentToken?: boolean;

    @v.IsBoolean()
    generateRecurrenceToken?: boolean;

    @v.IsString()
    paymentToken?: string;
}