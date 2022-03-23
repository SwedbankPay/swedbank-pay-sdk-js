import { Identifiable } from "../../generics/identifiable";
import { CardPaymentVerification } from "./cardPaymentVerification";
import * as v from 'class-validator';
import { Type } from "class-transformer";

export class CardPaymentVerifications extends Identifiable {
    @v.IsArray()
    @Type(() => CardPaymentVerification)
    verificationList: CardPaymentVerification[];
}