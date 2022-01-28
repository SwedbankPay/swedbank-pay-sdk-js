import * as v from 'class-validator';
import { Identifiable } from "../../generics/identifiable";
import { Transaction } from "./transaction";

export class TransactionListResponse extends Identifiable {
    // TODO: Add validation for array content
    @v.IsArray()
    transactionList: Transaction[];
}