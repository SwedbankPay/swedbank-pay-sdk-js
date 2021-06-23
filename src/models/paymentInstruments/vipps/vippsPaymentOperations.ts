export interface VippsPaymentOperations extends Dictionary<LinkRelation, HttpOperation> {
    cancel: Func<VippsPaymentCancelRequest, Task<CancellationResponse>>;
    capture: Func<VippsPaymentCaptureRequest, Task<CaptureResponse>>;
    directAuthorization: Func<VippsPaymentAuthorizationRequest, Task<VippsPaymentAuthorizationResponse>>;
    redirectAuthorization: HttpOperation;
    reversal: Func<VippsPaymentReversalRequest, Task<ReversalResponse>>;
    update: HttpOperation;
    viewAuthorization: HttpOperation;
}