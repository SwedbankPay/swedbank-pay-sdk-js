export interface TrustlyPaymentOperations extends Dictionary<LinkRelation, HttpOperation> {
    abort: Func<PaymentAbortRequest, Task<TrustlyPayment>>;
    cancel: Func<TrustlyPaymentCancelRequest, Task<CancellationResponse>>;
    redirectSale: HttpOperation;
    reverse: Func<TrustlyPaymentReversalRequest, Task<ReversalResponse>>;
    viewSale: HttpOperation;
}