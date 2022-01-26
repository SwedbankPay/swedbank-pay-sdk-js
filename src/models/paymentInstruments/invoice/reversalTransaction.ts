import { Amount } from "../../generics/amount";

export interface ReversalTransaction {
    amount: Amount;
    description: string;
    payeeReference: string;
    vatAmount: Amount;
    receiptReference: string;
}