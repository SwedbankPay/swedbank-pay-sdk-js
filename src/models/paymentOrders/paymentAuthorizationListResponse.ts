import { PaymentAuthorization } from "../paymentInstruments/paymentAuthorization";

export interface PaymentAuthorizationListResponse {
    id: URL;
    authorizationList: PaymentAuthorization[];
}