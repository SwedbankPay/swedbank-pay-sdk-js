import { PayeeInfo } from "../../../Services/PaymentOrder/models/PayeeInfo";
import { Currency } from "../../currency";
import { Language } from "../../language";
import { Metadata } from "../../MetaData";
import { Operation } from "../../Operation";
import { Urls } from "../../urls";
import { PaymentIntent } from "../paymentIntent";
import { Price } from "../price";

export interface VippsPaymentRequestDetails {
    currency: Currency;
    description: string;
    generatePaymentToken: boolean;
    generateRecurrenceToken: boolean;
    intent: PaymentIntent;
    language: Language;
    metadata: Metadata;
    operation: Operation;
    payeeInfo: PayeeInfo;
    payerReference: string;
    paymentToken: string;
    prices: Price[];
    urls: Urls;
    userAgent: string;
}