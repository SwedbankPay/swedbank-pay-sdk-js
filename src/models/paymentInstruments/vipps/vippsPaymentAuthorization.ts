import { AuthorizationTransaction } from "../transactions/authorizationTransaction";

export interface VippsPaymentAuthorization {
    mobileNumber: string;
    transaction: AuthorizationTransaction;
    vippsTransactionId: string;
}