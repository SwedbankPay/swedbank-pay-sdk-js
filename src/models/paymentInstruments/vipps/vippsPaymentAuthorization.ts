export interface VippsPaymentAuthorization {
    mobileNumber: string;
    transaction: AuthorizationTransaction;
    vippsTransactionId: string;
}