import * as v from 'class-validator';
import { Type } from 'class-transformer';
import { BaseModel } from "../generics/baseModel";

export class CancelTransaction extends BaseModel {
    @Type(() => transactionModel)
    @v.ValidateNested()
    transaction: transactionModel

}

class transactionModel extends BaseModel {
    @v.IsString()
    description: string;

    @v.IsString()
    payeeReference: string;
}