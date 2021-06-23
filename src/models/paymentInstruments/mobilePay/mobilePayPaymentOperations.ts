export interface MobilePayPaymentOperations extends Dictionary<LinkRelation, HttpOperation> {
    abort: Func<PaymentAbortRequest, Task<MobilePayPaymentResponse>>;
    cancel: Func<MobilePayPaymentCancelRequest, Task<CancellationResponse>>;
    capture: Func<MobilePayPaymentCaptureRequest, Task<CaptureResponse>>;
    redirectAuthorization: HttpOperation;
    reverse: Func<MobilePayPaymentReversalRequest, Task<ReversalResponse>>;
    viewAuthorization: HttpOperation;
}