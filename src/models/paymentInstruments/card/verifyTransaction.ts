import { Transaction } from "../transactions/transaction";

export interface VerifyTransaction extends Transaction {
    activities: URL;
}