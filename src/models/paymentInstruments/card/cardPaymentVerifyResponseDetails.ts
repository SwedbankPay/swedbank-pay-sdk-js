import { Identifiable } from "../../generics/identifiable";
import { CardPaymentVerification } from "./cardPaymentVerification";

export interface CardPaymentVerifyResponseDetails extends Identifiable {
    verificationList: CardPaymentVerification[];
}