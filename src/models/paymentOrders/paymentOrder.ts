export interface PaymentOrder extends Identifiable {
    amount: Amount;
    created: string;
    currency: Currency;
    currentPayment: CurrentPaymentResponse;
    description: string;
    language: Language;
    metadata: Metadata;
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