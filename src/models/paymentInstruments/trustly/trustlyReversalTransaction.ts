import { Amount } from "../../amount";
import { Operation } from "../../operation";

export interface TrustlyReversalTransaction {
    transactionActivity: Operation;
    amount: Amount;
    description: string;
    payeeReference: string;
    recepitReference: string;
    vatAmount: Amount;
}