import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { Transaction } from "./transaction";

export class TransactionResponse extends BaseModel{
    @v.ValidateNested()
    @Type(() => Transaction)
    transaction: Transaction;
}