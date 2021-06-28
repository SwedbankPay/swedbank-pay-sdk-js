import { Identifiable } from "../../identifiable";
import { VippsPaymentAuthorization } from "./vippsPaymentAuthorization";

export interface VippsPaymentAuthorizationListResponse extends Identifiable {
    authorizationList: VippsPaymentAuthorization[];
}