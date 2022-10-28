import { Type } from 'class-transformer';
import * as v from 'class-validator'
import { BaseModel } from '../../generics/base-model';
import { PaymentAbortRequestDetails } from './payment-abort-request-details';

export class PaymentAbortRequest extends BaseModel{
    @Type(() => PaymentAbortRequest)
    @v.ValidateNested()
    payment: PaymentAbortRequestDetails;
}