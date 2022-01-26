import { Amount } from "../amount";
import { HttpOperation } from "../httpOperation";
import { Identifiable } from "../identifiable";
import { Problem } from "../problem";
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