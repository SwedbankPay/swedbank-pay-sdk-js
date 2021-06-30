import { TransactionResponse } from "./transactionResponse";

export interface ReversalResponse {
    payment: URL;
    reversal: TransactionResponse;
}