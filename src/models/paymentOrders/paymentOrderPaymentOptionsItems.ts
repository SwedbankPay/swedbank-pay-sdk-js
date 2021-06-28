import { CreditCardOptions } from "../creditCardOptions";
import { Invoice } from "./invoice";
import { Swish } from "./swish";

export interface PaymentOrderPaymentOptionsItems {
    creditCard: CreditCardOptions;
    invoice: Invoice;
    swish: Swish;
}