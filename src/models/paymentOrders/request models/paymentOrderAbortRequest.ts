import { BaseModel } from '../../generics/baseModel';
import { PaymentOrderAbortRequestDetails } from './paymentOrderAbortRequestDetails';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class PaymentOrderAbortRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => PaymentOrderAbortRequestDetails)
    paymentOrder: PaymentOrderAbortRequestDetails;
}