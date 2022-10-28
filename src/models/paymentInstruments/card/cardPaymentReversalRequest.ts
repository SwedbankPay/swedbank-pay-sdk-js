import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { CardPaymentReversalTransaction } from './cardPaymentReversalTransaction';

export class CardPaymentReversalRequest extends BaseModel {
    @v.ValidateNested()
    @Type(() => CardPaymentReversalTransaction)
    transaction: CardPaymentReversalTransaction;
}