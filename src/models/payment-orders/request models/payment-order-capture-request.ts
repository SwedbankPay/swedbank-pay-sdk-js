import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { PaymentOrderCaptureTransaction } from './payment-order-capture-transaction';

export class PaymentOrderCaptureRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => PaymentOrderCaptureTransaction)
    transaction: PaymentOrderCaptureTransaction;
}