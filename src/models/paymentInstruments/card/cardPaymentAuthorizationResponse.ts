import { CardPaymentAuthorization } from "./cardPaymentAuthorization";

export interface CardPaymentAuthorizationResponse {
    authorization: CardPaymentAuthorization;
    payment: URL;
}