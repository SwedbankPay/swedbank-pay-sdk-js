export interface PaymentOrderOperations extends Dictionary<LinkRelation, HttpOperation> {
    abort: Func<PaymentOrderAbortRequest, Task<PaymentOrderResponse>>;
    cancel: Func<PaymentOrderCancelRequest, Task<CancellationResponse>>;
    capture: Func<PaymentOrderCaptureRequest, Task<CaptureResponse>>;
    reverse: Func<PaymentOrderReversalRequest, Task<ReversalResponse>>;
    update: Func<PaymentOrderUpdateRequest, Task<PaymentOrderResponse>>;
    view: HttpOperation;
}