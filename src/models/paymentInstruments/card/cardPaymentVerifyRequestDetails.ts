export interface CardPaymentVerifyRequestDetails {
    operation: Operation;
    intent: PaymentIntent;
    recurrenceToken: string;
    currency: Currency;
    amount: Amount;
    vatAmount: Amount;
    description: string;
    userAgent: string;
    language: Language;
    urls: Urls;
    payeeInfo: PayeeInfo;
    metadata: Metadata;
}