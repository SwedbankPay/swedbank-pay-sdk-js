import { Amount } from "../generics/amount";
import { HttpOperation } from "../generics/httpOperation";
import { Identifiable } from "../generics/identifiable";
import { Problem } from "../generics/problem";
import { State } from "../enums/state";
import { TransactionType } from "../enums/transactionType";

export interface Transaction extends Identifiable {
    created: string;
    updated: string;
    activity: string;
    amount: Amount;
    description: string;
    isOperational: boolean;
    number: number;
    operations: HttpOperation[];
    payeeReference: string;
    state: State;
    type: TransactionType;
    vatAmount: Amount;
    problem: Problem;
}