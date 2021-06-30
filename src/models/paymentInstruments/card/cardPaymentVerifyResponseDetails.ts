import { Identifiable } from "../../identifiable";
import { CardPaymentVerification } from "./cardPaymentVerification";

export interface CardPaymentVerifyResponseDetails extends Identifiable {
    verificationList: CardPaymentVerification[];
}