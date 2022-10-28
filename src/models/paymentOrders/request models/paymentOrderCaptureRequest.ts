import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { PaymentOrderCaptureTransaction } from './paymentOrderCaptureTransaction';

export class PaymentOrderCaptureRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => PaymentOrderCaptureTransaction)
    transaction: PaymentOrderCaptureTransaction;
}