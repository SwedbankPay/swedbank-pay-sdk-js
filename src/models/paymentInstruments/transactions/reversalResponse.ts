import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { TransactionResponse } from "./transactionResponse";

export class ReversalResponse extends Identifiable {
    @v.ValidateNested()
    @Type(() => TransactionResponse)
    reversal: TransactionResponse;
}