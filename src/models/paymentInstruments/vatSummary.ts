import { Amount } from "../amount";

export interface VatSummary {
    amount: Amount;
    vatPercent: string;
    vatAmount: Amount;
}