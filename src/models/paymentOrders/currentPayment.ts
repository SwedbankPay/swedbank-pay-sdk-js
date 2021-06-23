export interface CurrentPayment {
    amount: Amount;
    authorizations: PaymentAuthorizationResponse;
    cancellations: CancellationListResponse;
    captures: CaptureListResponse;
    created: string;
    currency: Currency;
    description: string;
    instrument: PaymentInstrument;
    intent: PaymentIntent;
    language: Language;
    number: number;
    operation: Operation;
    payeeInfo: PaymentOrderPayeeInfo;
    payerReference: string;
    paymentToken: string;
    prices: PriceListResponse;
    reversals: ReversalListResponse;
    sales: SaleListResponse;
    state: State;
    transactions: TransactionListResponse;
    updated: string;
    urls: Urls;
    userAgent: string;
}