import { PayeeInfo } from "../../../Services/PaymentOrder/models/PayeeInfo";
import { Amount } from "../../generics/amount";
import { Currency } from "../../currency";
import { Language } from "../../language";
import { MetaData } from "../../generics/MetaData-resource";
import { Operation } from "../../enums/operation";
import { Urls } from "../../generics/urls";
import { PaymentIntent } from "../enums/paymentIntent";

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
    metadata: MetaData;
}