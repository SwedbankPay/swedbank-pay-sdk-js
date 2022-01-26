import { Amount } from "../../generics/amount";

export interface CardPaymentReversalTransaction {
    amount: Amount;
    description: string;
    payeeReference: string;
    vatAmount: Amount;
}