import { Identifiable } from "../../generics/identifiable";
import { VippsPaymentAuthorization } from "./vippsPaymentAuthorization";
import * as v from 'class-validator';
import { Type } from "class-transformer";

export class VippsPaymentAuthorizationResponse extends Identifiable{
    @v.ValidateNested()
    @Type(() => VippsPaymentAuthorization)
    authorization: VippsPaymentAuthorization;
}