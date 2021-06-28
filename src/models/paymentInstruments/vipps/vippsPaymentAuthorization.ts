import { AuthorizationTransaction } from "../authorizationTransaction";

export interface VippsPaymentAuthorization {
    mobileNumber: string;
    transaction: AuthorizationTransaction;
    vippsTransactionId: string;
}