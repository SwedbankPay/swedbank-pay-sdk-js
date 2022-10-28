import * as v from 'class-validator';
import { SwishRequestData } from './swishRequestData';
import { SwishPaymentRequestDetails } from './swishPaymentRequestDetails';
import { BaseModel } from '../../generics/baseModel';
import { Type } from 'class-transformer';

export class SwishPaymentRequest extends BaseModel {
    @v.ValidateNested()
    @Type(() => SwishPaymentRequestDetails)
    payment: SwishPaymentRequestDetails;

    @v.ValidateNested()
    @Type(() => SwishRequestData)
    swish: SwishRequestData;
}