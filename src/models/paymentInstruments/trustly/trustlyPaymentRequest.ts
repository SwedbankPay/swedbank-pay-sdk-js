import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { TrustlyPaymentDetails } from './trustlyPaymentDetails';

export class TrustlyPaymentRequest extends BaseModel {
    @v.ValidateNested()
    @Type(() => TrustlyPaymentDetails)
    payment: TrustlyPaymentDetails;
}