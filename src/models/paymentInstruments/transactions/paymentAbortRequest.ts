import * as v from 'class-validator'
import { Type } from 'class-transformer';
import { BaseModel } from '../../generics/baseModel';
import { PaymentAbortRequestDetails } from "./paymentAbortRequestDetails";

export class PaymentAbortRequest extends BaseModel{
    @Type(() => PaymentAbortRequest)
    @v.ValidateNested()
    payment: PaymentAbortRequestDetails;
}