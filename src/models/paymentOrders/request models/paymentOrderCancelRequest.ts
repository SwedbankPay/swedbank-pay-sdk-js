import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { PaymentOrderCancelTransaction } from './paymentOrderCancelTransaction';

export class PaymentOrderCancelRequest extends BaseModel {
    @v.ValidateNested()
    @Type(() => PaymentOrderCancelTransaction)
    transaction: PaymentOrderCancelTransaction;
}