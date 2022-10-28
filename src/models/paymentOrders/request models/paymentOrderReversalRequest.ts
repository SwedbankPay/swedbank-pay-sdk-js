import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { PaymentOrderReversalTransaction } from '../paymentOrderReversalTransaction';

export class PaymentOrderReversalRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => PaymentOrderReversalTransaction)
    transaction: PaymentOrderReversalTransaction;
}