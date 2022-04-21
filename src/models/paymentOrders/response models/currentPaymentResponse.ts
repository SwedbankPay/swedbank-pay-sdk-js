import { BaseModel } from "../../generics/baseModel";
import { CurrentPayment } from "../currentPayment";
import * as v from 'class-validator';
import { Type } from "class-transformer";

export class CurrentPaymentResponse extends BaseModel{
    @v.ValidateNested()
    @Type(() => URL)
    paymentOrder: URL;

    @v.IsString()
    menuElementName: string;

    @v.ValidateNested()
    @Type(() => CurrentPayment)
    payment: CurrentPayment;
}