import { PayeeInfo } from "../../../Services/PaymentOrder/models/PayeeInfo";
import { Currency } from "../../currency";
import { Language } from "../../language";
import { Metadata } from "../../MetaData";
import { Operation } from "../../Operation";
import { Urls } from "../../urls";
import { PaymentIntent } from "../paymentIntent";
import { PrefillInfo } from "../prefillInfo";
import { Price } from "../price";
import { SwishRequestData } from "./swishRequestData";

export interface SwishPaymentRequestDetails {
    currency: Currency;
    description: string;
    intent: PaymentIntent;
    language: Language;
    operation: Operation;
    payeeInfo: PayeeInfo;
    payerReference: string;
    prefillInfo: PrefillInfo;
    prices: Price[];
    swish: SwishRequestData;
    urls: Urls;
    userAgent: string;
    metadata: Metadata;
}