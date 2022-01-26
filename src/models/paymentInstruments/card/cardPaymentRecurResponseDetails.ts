import { PayeeInfo } from "../../../Services/PaymentOrder/models/PayeeInfo";
import { Amount } from "../../generics/amount";
import { Currency } from "../../currency";
import { Identifiable } from "../../identifiable";
import { MetaData } from "../../generics/MetaData-resource";
import { Operation } from "../../enums/operation";
import { State } from "../../enums/state";
import { Urls } from "../../urls";
import { PaymentInstrument } from "../paymentInstrument";
import { PriceListResponse } from "../priceListResponse";
import { TransactionListResponse } from "../transactionListResponse";
import { CardPaymentAuthorization } from "./cardPaymentAuthorization";

export interface CardPaymentRecurResponseDetails extends Identifiable {
    recurrenceToken: string;
    number: number;
    created: string;
    updated: string;
    instrument: PaymentInstrument;
    operation: Operation;
    state: State;
    currency: Currency;
    prices: PriceListResponse;
    amount: Amount;
    remainingCaptureAmount: Amount;
    remainingCancellationAmount: Amount;
    description: string;
    initiatingSystemUserAgent: string;
    userAgent: string;
    transactions: TransactionListResponse;
    authorizations: CardPaymentAuthorization;
    urls: Urls;
    payeeInfo: PayeeInfo;
    metaData: MetaData;
}