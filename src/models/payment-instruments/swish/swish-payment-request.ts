import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { SwishPaymentRequestDetails } from './swish-payment-request-details';
import { SwishRequestData } from './swish-request-data';

export class SwishPaymentRequest extends BaseModel {
    @v.ValidateNested()
    @Type(() => SwishPaymentRequestDetails)
    payment: SwishPaymentRequestDetails;

    @v.ValidateNested()
    @Type(() => SwishRequestData)
    swish: SwishRequestData;
}