export interface VippsPaymentRequestDetails {
    currency: Currency;
    description: string;
    generatePaymentToken: boolean;
    generateRecurrenceToken: boolean;
    intent: PaymentIntent;
    language: Language;
    metadata: Metadata;
    operation: Operation;
    payeeInfo: PayeeInfo;
    payerReference: string;
    paymentToken: string;
    prices: Price[];
    urls: Urls;
    userAgent: string;
}