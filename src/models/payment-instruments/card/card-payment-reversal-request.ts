import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { CardPaymentReversalTransaction } from './card-payment-reversal-transaction';

export class CardPaymentReversalRequest extends BaseModel {
    @v.ValidateNested()
    @Type(() => CardPaymentReversalTransaction)
    transaction: CardPaymentReversalTransaction;
}