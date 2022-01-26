import * as v from 'class-validator';
import { Type } from 'class-transformer';
import { BaseModel } from "../generics/baseModel"
import { Amount } from '../generics/amount';

export class CaptureTransaction extends BaseModel {
    @Type(() => transactionModel)
    @v.ValidateNested()
    transaction: transactionModel

}

class transactionModel extends BaseModel {
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