import { Identifiable } from "../../identifiable";
import { PaymentInstrument } from "../paymentInstrument";
import { VippsPaymentAuthorizationListResponse } from "./vippsPaymentAuthorizationListResponse";

export interface VippsPayment extends Identifiable, PaymentInstrument {
    authorizations: VippsPaymentAuthorizationListResponse;
}