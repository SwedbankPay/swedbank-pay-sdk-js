import { BaseModel } from "../../generics/baseModel";
import { MobilePayPaymentDetails } from "./mobilePayPaymentDetails";
import { MobilePayRequestData } from "./mobilePayRequestData";
import * as v from 'class-validator';
import { Type } from "class-transformer";

export class MobilePayPaymentRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => MobilePayPaymentDetails)
    payment: MobilePayPaymentDetails;

    @v.ValidateNested()
    @Type(() => MobilePayRequestData)
    mobilePay: MobilePayRequestData;
}