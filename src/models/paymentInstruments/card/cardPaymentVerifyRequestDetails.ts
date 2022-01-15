import { PayeeInfo } from "../../../Services/PaymentOrder/models/PayeeInfo";
import { Amount } from "../../amount";
import { Currency } from "../../currency";
import { Language } from "../../language";
import { Operation } from "../../operation";
import { Urls } from "../../urls";
import { PaymentIntent } from "../paymentIntent";

export interface CardPaymentVerifyRequestDetails {
    operation: Operation;
    intent: PaymentIntent;
    recurrenceToken: string;
    currency: Currency;
    amount: Amount;
    vatAmount: Amount;
    description: string;
    userAgent: string;
    language: Language;
    urls: Urls;
    payeeInfo: PayeeInfo;
    metadata: Metadata;
}