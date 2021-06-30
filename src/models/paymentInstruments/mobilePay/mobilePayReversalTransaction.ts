import { Amount } from "../../amount";

export interface MobilePayReversalTransaction {
    amount: Amount;
    description: string;
    payeeReference: string;
    vatAmount: Amount;
}