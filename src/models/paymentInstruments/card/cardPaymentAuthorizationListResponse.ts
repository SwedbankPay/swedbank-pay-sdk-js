import { Identifiable } from "../../generics/identifiable";
import { PaymentAuthorization } from "../paymentAuthorization";
import * as v from 'class-validator';
import { Type } from "class-transformer";


export class CardPaymentAuthorizationListResponse extends Identifiable {
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => PaymentAuthorization)
    authorizationList: PaymentAuthorization[];
}