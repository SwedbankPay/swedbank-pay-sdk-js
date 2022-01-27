import { PayeeInfo } from "../../../Services/PaymentOrder/models/PayeeInfo";
import { Currency } from "../../currency";
import { Language } from "../../language";
import { Operation } from "../../enums/operation";
import { Urls } from "../../generics/urls";
import { PaymentIntent } from "../enums/paymentIntent";
import { Price } from "../price";
import { TrustlyPrefillInfo } from "./trustlyPrefillInfo";

export interface TrustlyPaymentDetails {
    currency: Currency;
    description: string;
    intent: PaymentIntent;
    language: Language;
    operation: Operation;
    payeeInfo: PayeeInfo;
    payerReference: string;
    prices: Price[];
    urls: Urls;
    userAgent: string;
    prefillInfo: TrustlyPrefillInfo;
}