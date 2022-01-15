import { PayeeInfo } from "../../../Services/PaymentOrder/models/PayeeInfo";
import { Currency } from "../../currency";
import { Language } from "../../language";
import { Operation } from "../../operation";
import { Urls } from "../../urls";
import { PaymentIntent } from "../paymentIntent";
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