import { BaseModel } from '../../generics/baseModel';
import { PaymentOrderRequestDetails } from './paymentOrderRequestDetails';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class PaymentOrderRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => PaymentOrderRequestDetails)
    paymentOrder: PaymentOrderRequestDetails;
}