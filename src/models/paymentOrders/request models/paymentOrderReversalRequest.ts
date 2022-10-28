import { BaseModel } from '../../generics/baseModel';
import { PaymentOrderReversalTransaction } from '../paymentOrderReversalTransaction';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class PaymentOrderReversalRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => PaymentOrderReversalTransaction)
    transaction: PaymentOrderReversalTransaction;
}