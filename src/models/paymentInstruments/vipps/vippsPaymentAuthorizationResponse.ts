import { VippsPaymentAuthorization } from "./vippsPaymentAuthorization";

export interface VippsPaymentAuthorizationResponse {
    payment: URL;
    authorization: VippsPaymentAuthorization;
}