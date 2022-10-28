import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { GenericPaymentRequestDetails } from '../generic-payment-request-details';
import { TrustlyPrefillInfo } from './trustly-prefillInfo';

export class TrustlyPaymentDetails extends GenericPaymentRequestDetails{
    @v.ValidateNested()
    @Type(() => TrustlyPrefillInfo)
    prefillInfo: TrustlyPrefillInfo;
}