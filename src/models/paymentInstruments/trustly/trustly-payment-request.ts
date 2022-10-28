import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { TrustlyPaymentDetails } from './trustly-payment-details';

export class TrustlyPaymentRequest extends BaseModel {
    @v.ValidateNested()
    @Type(() => TrustlyPaymentDetails)
    payment: TrustlyPaymentDetails;
}