import { Identifiable } from "../../identifiable";
import { CardPaymentVerification } from "./cardPaymentVerification";

export interface CardPaymentVerifications extends Identifiable {
    verificationList: CardPaymentVerification[];
}