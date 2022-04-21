import { BaseModel } from "../../generics/baseModel";
import { PaymentOrderUpdateRequestDetails } from "./paymentOrderUpdateRequestDetails";
import * as v from 'class-validator';
import { Type } from "class-transformer";

export class PaymentOrderUpdateRequest extends BaseModel {

    @v.ValidateNested()
    @Type(() => PaymentOrderUpdateRequestDetails)
    paymentOrder: PaymentOrderUpdateRequestDetails;
}