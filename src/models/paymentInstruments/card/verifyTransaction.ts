import { Transaction } from "../transaction";

export interface VerifyTransaction extends Transaction {
    activities: URL;
}