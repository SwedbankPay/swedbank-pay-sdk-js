import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { PaymentOrderRequestDetails } from './paymentOrderRequestDetails';

export class PaymentOrderRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => PaymentOrderRequestDetails)
    paymentOrder: PaymentOrderRequestDetails;
}