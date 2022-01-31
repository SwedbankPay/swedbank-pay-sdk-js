import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { TransactionResponse } from "./transactionResponse";

export class ReversalResponse extends BaseModel {
    @v.IsUrl()
    payment: URL;

    @v.ValidateNested()
    @Type(() => TransactionResponse)
    reversal: TransactionResponse;
}