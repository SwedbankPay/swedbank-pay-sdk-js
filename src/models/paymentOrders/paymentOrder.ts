import { PayeeInfo } from "../../Services/PaymentOrder/models/PayeeInfo";
import { Amount } from "../amount";
import { Currency } from "../currency";
import { Identifiable } from "../identifiable";
import { Language } from "../language";
import { Metadata } from "../MetaData";
import { State } from "../state";
import { Urls } from "../urls";
import { CurrentPaymentResponse } from "./currentPaymentResponse";
import { OrderItemListResponse } from "./orderItemListResponse";
import { PayerResponse } from "./payerResponse";

export interface PaymentOrder extends Identifiable {
    amount: Amount;
    created: string;
    currency: Currency;
    currentPayment: CurrentPaymentResponse;
    description: string;
    language: Language;
    metadata: Metadata;
    operation: string;
    orderItems: OrderItemListResponse;
    payeeInfo: PayeeInfo;
    payers: PayerResponse;
    payments: Identifiable;
    remainingCancelAmount: Amount;
    remainingCaptureAmount: Amount;
    remainingReversalAmount: Amount;
    settings: Identifiable;
    state: State;
    updated: string;
    urls: Urls;
    userAgent: string;
    vatAmount: Amount;
}