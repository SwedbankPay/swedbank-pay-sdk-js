import { PayeeInfo } from "../../../Services/PaymentOrder/models/PayeeInfo";
import { Currency } from "../../currency";
import { Language } from "../../language";
import { MetaData } from "../../generics/MetaData-resource";
import { Operation } from "../../enums/operation";
import { Urls } from "../../generics/urls";
import { PaymentIntent } from "../enums/paymentIntent";
import { PrefillInfo } from "../prefillInfo";
import { Price } from "../price";

export interface InvoicePaymentRequestDetails {
    currency: Currency;
    description: string;
    generatePaymentToken: boolean;
    generateRecurrenceToken: boolean;
    intent: PaymentIntent;
    language: Language;
    metadata: MetaData;
    operation: Operation;
    payeeInfo: PayeeInfo;
    payerReference: string;
    paymentToken: string;
    prices: Price[];
    urls: Urls;
    userAgent: string;
    prefillInfo: PrefillInfo;
}