import * as v from 'class-validator';
import { GenericPaymentRequestDetails } from '../genericPaymentRequestDetails';

export class SwishPaymentRequestDetails extends GenericPaymentRequestDetails{
    @v.IsString()
    payerReference: string;
}