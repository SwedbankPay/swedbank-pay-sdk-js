import { BaseModel } from "../../generics/baseModel";
import { MobilePayPaymentAuthorization } from "./mobilePayPaymentAuthorization";
import * as v from 'class-validator';
import { Type } from "class-transformer";

export class MobilePayPaymentAuthorizationListResponse extends BaseModel{
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => MobilePayPaymentAuthorization)
    authorizationList: MobilePayPaymentAuthorization[];
}