import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { PaymentOrderAbortRequestDetails } from './paymentOrderAbortRequestDetails';

export class PaymentOrderAbortRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => PaymentOrderAbortRequestDetails)
    paymentOrder: PaymentOrderAbortRequestDetails;
}