import { Amount } from "../../amount";
import { Operation } from "../../enums/operation";

export interface TrustlyReversalTransaction {
    transactionActivity: Operation;
    amount: Amount;
    description: string;
    payeeReference: string;
    recepitReference: string;
    vatAmount: Amount;
}