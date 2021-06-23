export interface PaymentInstrument extends Identifiable {
    amount: Amount;
    cancellations: CancellationListResponse;
    captures: CaptureListResponse;
    created: string;
    updated: string;
    currency: Currency;
    description: string;
    instrument: PaymentInstrument;
    intent: PaymentIntent;
    language: Language;
    number: number;
    operation: Operation;
    payeeInfo: PayeeInfo;
    payerReference: string;
    initiatingSystemUserAgent: string;
    prices: PriceListResponse;
    remainingCancellationAmount: Amount;
    remainingCaptureAmount: Amount;
    remainingReversalAmount: Amount;
    state: State;
    transactions: TransactionListResponse;
    urls: Urls;
    userAgent: string;
    vatAmount: Amount;
    reversals: ReversalListResponse;
    metadata: Metadata;
}