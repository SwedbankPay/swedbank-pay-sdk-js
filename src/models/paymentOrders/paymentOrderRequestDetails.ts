export interface PaymentOrderRequestDetails {
    amount: Amount;
    currency: Currency;
    description: string;
    generateRecurrenceToken: boolean;
    items: PaymentOrderPaymentOptionsItems[];
    language: Language;
    metadata: Metadata;
    operation: Operation;
    orderItems: OrderItem[];
    payeeInfo: PayeeInfo;
    payer: Payer;
    riskIndicator: RiskIndicator;
    urls: Urls;
    userAgent: string;
    vatAmount: Amount;
    disablePaymentMenu: boolean | null;
}