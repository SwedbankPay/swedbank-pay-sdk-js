import { Identifiable } from "../../generics/identifiable";
import { CardPaymentAuthorizationResponse } from "./cardPaymentAuthorizationResponse";
import * as v from 'class-validator';
import { Type } from "class-transformer";


export class CardPaymentAuthorizationListResponse extends Identifiable {
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => CardPaymentAuthorizationResponse)
    authorizationList: CardPaymentAuthorizationResponse[];
}