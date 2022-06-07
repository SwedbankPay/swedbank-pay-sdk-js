import { BaseModel } from "../../generics/baseModel";
import { CardPaymentAbortPayment } from "./cardPaymentAbortPayment";
import * as v from 'class-validator';
import { Type } from "class-transformer";

export class CardPaymentAbortRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => CardPaymentAbortPayment)
    payment: CardPaymentAbortPayment;
}