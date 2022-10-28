import * as v from 'class-validator';
import { GenericPaymentRequestDetails } from '../generic-payment-request-details';

export class SwishPaymentRequestDetails extends GenericPaymentRequestDetails {
  @v.IsString()
  payerReference: string;
}
