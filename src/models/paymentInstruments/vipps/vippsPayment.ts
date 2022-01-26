import { Identifiable } from "../../generics/identifiable";
import { PaymentInstrument } from "../paymentInstrument";
import { VippsPaymentAuthorizationListResponse } from "./vippsPaymentAuthorizationListResponse";

export interface VippsPayment extends Identifiable, PaymentInstrument {
    authorizations: VippsPaymentAuthorizationListResponse;
}