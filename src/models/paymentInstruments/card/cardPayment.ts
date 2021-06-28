import { Identifiable } from "../../identifiable";
import { PaymentInstrument } from "../paymentInstrument";
import { CardPaymentAuthorizationListResponse } from "./cardPaymentAuthorizationListResponse";

export interface CardPayment extends Identifiable, PaymentInstrument {
    authorizations: CardPaymentAuthorizationListResponse;
    recurrenceToken: string;
}