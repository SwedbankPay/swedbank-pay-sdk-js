import { Amount } from "../generics/amount";

export interface VatSummary {
    amount: Amount;
    vatPercent: string;
    vatAmount: Amount;
}