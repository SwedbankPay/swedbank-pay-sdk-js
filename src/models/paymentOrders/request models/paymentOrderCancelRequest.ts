import { BaseModel } from '../../generics/baseModel';
import { PaymentOrderCancelTransaction } from './paymentOrderCancelTransaction';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class PaymentOrderCancelRequest extends BaseModel {
    @v.ValidateNested()
    @Type(() => PaymentOrderCancelTransaction)
    transaction: PaymentOrderCancelTransaction;
}