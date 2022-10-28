import * as v from 'class-validator';
import { TrustlyPrefillInfo } from './trustlyPrefillInfo';
import { GenericPaymentRequestDetails } from '../genericPaymentRequestDetails';
import { Type } from 'class-transformer';

export class TrustlyPaymentDetails extends GenericPaymentRequestDetails{
    @v.ValidateNested()
    @Type(() => TrustlyPrefillInfo)
    prefillInfo: TrustlyPrefillInfo;
}