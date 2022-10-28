import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { GenericPaymentRequestDetails } from '../genericPaymentRequestDetails';
import { TrustlyPrefillInfo } from './trustlyPrefillInfo';

export class TrustlyPaymentDetails extends GenericPaymentRequestDetails{
    @v.ValidateNested()
    @Type(() => TrustlyPrefillInfo)
    prefillInfo: TrustlyPrefillInfo;
}