export interface CardPaymentOperations extends Dictionary<LinkRelation, HttpOperation> {
    abort: Func<CardPaymentAbortRequest, Task<CardPaymentResponse>>;
    cancel: Func<CardPaymentCancelRequest, Task<CancellationResponse>>;
    capture: Func<CardPaymentCaptureRequest, Task<CaptureResponse>>;
    directAuthorization: Func<CardPaymentAuthorizationRequest, Task<CardPaymentAuthorizationResponse>>;
    directVerification: HttpOperation;
    paidPayment: HttpOperation;
    redirectAuthorization: HttpOperation;
    redirectVerification: HttpOperation;
    reverse: Func<CardPaymentReversalRequest, Task<ReversalResponse>>;
    viewAuthorization: HttpOperation;
    viewVerification: HttpOperation;
}