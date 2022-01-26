import { Identifiable } from "../../generics/identifiable";
import { PaymentAuthorization } from "../paymentAuthorization";

export interface CardPaymentAuthorizationListResponse extends Identifiable {
    authorizationList: PaymentAuthorization[];
}