import * as v from 'class-validator';
import { Identifiable } from "../../generics/identifiable";
import { Transaction } from "./transaction";
import { Type } from 'class-transformer';

export class TransactionListResponse extends Identifiable {
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => Transaction)
    transactionList: Transaction[];
}