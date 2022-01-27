import { Identifiable } from "../../generics/identifiable";
import { Transaction } from "../transactions/transaction";

export interface SwishPaymentSale extends Identifiable {
    created: string;
    updated: string;
    paymentRequestToken: string;
    transaction: Transaction;
}