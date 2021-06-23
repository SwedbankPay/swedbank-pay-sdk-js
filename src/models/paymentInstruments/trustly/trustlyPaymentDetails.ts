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