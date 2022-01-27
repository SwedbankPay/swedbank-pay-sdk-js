import { TransactionResponse } from "./transactionResponse";

export interface CancellationResponse {
    payment: URL;
    cancellation: TransactionResponse;
}