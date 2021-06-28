import { Amount } from "../../amount";
import { Operation } from "../../Operation";

export interface TrustlyReversalTransaction {
    transactionActivity: Operation;
    amount: Amount;
    description: string;
    payeeReference: string;
    recepitReference: string;
    vatAmount: Amount;
}