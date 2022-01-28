import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { TransactionResponse } from "./transactionResponse";

export class ReversalListResponse extends BaseModel{
    // TODO: add array content validatoin
    @v.IsArray()
    reversalList: TransactionResponse[];
}