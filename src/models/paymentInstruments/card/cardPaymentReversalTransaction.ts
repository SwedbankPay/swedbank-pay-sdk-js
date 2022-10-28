import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Amount } from '../../generics/amount';
import { BaseModel } from '../../generics/baseModel';

export class CardPaymentReversalTransaction extends BaseModel {
    @v.ValidateNested()
    @Type(() => Amount)
    amount: Amount;

    @v.IsString()
    description: string;

    @v.IsString()
    payeeReference: string;

    @v.ValidateNested()
    @Type(() => Amount)
    vatAmount: Amount;
}