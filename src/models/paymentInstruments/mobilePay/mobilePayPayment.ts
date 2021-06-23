export interface MobilePayPayment extends Identifiable, PaymentInstrument {
    authorizations: MobilePayPaymentAuthorizationListResponse;
}