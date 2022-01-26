import { Amount } from "../../generics/amount";

export interface SwishPaymentReversalTransaction {
    amount: Amount;
    description: string;
    payeeReference: string;
    vatAmount: Amount;
}