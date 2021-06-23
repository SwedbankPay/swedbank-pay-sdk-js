export interface VippsPayment extends Identifiable, PaymentInstrument {
    authorizations: VippsPaymentAuthorizationListResponse;
}