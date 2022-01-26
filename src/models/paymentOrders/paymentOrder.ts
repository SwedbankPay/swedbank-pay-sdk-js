import { PayeeInfo } from "../../Services/PaymentOrder/models/PayeeInfo";
import { Amount } from "../generics/amount";
import { Currency } from "../currency";
import { Identifiable } from "../identifiable";
import { Language } from "../language";
import { MetaData } from "../generics/MetaData-resource";
import { State } from "../enums/state";
import { Urls } from "../generics/urls";
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
    metadata: MetaData;
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