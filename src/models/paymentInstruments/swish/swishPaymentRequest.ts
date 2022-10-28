import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { SwishPaymentRequestDetails } from './swishPaymentRequestDetails';
import { SwishRequestData } from './swishRequestData';

export class SwishPaymentRequest extends BaseModel {
    @v.ValidateNested()
    @Type(() => SwishPaymentRequestDetails)
    payment: SwishPaymentRequestDetails;

    @v.ValidateNested()
    @Type(() => SwishRequestData)
    swish: SwishRequestData;
}