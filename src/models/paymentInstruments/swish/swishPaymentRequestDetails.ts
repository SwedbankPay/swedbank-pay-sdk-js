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