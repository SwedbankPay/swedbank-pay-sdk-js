import { PayeeInfo } from "../../../Services/PaymentOrder/models/PayeeInfo";
import { Currency } from "../../currency";
import { Language } from "../../language";
import { Metadata } from "../../MetaData";
import { Operation } from "../../Operation";
import { Urls } from "../../urls";
import { PaymentIntent } from "../paymentIntent";
import { PrefillInfo } from "../prefillInfo";
import { Price } from "../price";

export interface PaymentRequestDetails {
    currency: Currency;
    description: string;
    generatePaymentToken: boolean;
    generateRecurrenceToken: boolean;
    intent: PaymentIntent;
    language: Language;
    operation: Operation;
    payeeInfo: PayeeInfo;
    payerReference: string;
    paymentToken: string;
    prefillInfo: PrefillInfo;
    prices: Price[];
    urls: Urls;
    userAgent: string;
    metadata: Metadata;
}