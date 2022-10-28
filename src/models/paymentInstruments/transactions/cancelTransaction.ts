import * as v from 'class-validator';
import { Type } from 'class-transformer';
import { BaseModel } from '../../generics/baseModel';

class TransactionModel extends BaseModel {
    @v.IsString()
    description: string;

    @v.IsString()
    payeeReference: string;
}

export class CancelTransaction extends BaseModel {
    @Type(() => TransactionModel)
    @v.ValidateNested()
    transaction: TransactionModel

}
