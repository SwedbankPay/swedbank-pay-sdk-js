import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { TransactionResponse } from "./transactionResponse";

export class ReversalListResponse extends BaseModel{
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => TransactionResponse)
    reversalList: TransactionResponse[];
}