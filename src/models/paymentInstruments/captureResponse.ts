import { Transaction } from "./transaction";

export interface CaptureResponse {
    payment: URL;
    capture: Transaction;
}