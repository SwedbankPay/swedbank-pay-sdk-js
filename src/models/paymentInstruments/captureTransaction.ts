import { Amount } from "../generics/amount";

export interface CaptureTransaction {
    amount: Amount;
    description: string;
    payeeReference: string;
    vatAmount: Amount;
}