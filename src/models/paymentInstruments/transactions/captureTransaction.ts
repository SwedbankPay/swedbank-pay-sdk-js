import * as v from 'class-validator';
import { Type } from 'class-transformer';
import { BaseModel } from '../../generics/baseModel'
import { Amount } from '../../generics/amount';

class TransactionModel extends BaseModel {
    @v.ValidateNested()
    @Type(() => Amount)
    amount: Amount;
    
    @v.ValidateNested()
    @Type(() => Amount)
    vatAmount: Amount;

    @v.IsString()
    description: string;

    @v.IsString()
    payeeReference: string;
}

export class CaptureTransaction extends BaseModel {
    @Type(() => TransactionModel)
    @v.ValidateNested()
    transaction: TransactionModel

}