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
    metaData: Metadata;
}