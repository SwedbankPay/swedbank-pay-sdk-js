import { MobilePayPaymentAuthorization } from "./mobilePayPaymentAuthorization";

export interface MobilePayPaymentAuthorizationResponse {
    authorization: MobilePayPaymentAuthorization;
    payment: URL;
}