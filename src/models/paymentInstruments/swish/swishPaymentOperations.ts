export interface SwishPaymentOperations extends Dictionary<LinkRelation, HttpOperation> {
    abort: Func<PaymentAbortRequest, Task<SwishPaymentResponse>>;
    paidPayment: HttpOperation;
    redirectSale: HttpOperation;
    reverse: Func<SwishPaymentReversalRequest, Task<ReversalResponse>>;
    sale: Func<SwishPaymentSaleRequest, Task<SwishPaymentSaleResponse>>;
    viewSales: HttpOperation;
}