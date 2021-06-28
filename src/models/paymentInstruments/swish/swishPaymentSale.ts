import { Identifiable } from "../../identifiable";
import { Transaction } from "../transaction";

export interface SwishPaymentSale extends Identifiable {
    created: string;
    updated: string;
    paymentRequestToken: string;
    transaction: Transaction;
}