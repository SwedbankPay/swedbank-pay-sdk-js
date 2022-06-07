import { PaymentOrderCaptureTransaction } from "./paymentOrderCaptureTransaction";
import * as v from 'class-validator';
import { Type } from "class-transformer";
import { BaseModel } from "../../generics/baseModel";

export class PaymentOrderCaptureRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => PaymentOrderCaptureTransaction)
    transaction: PaymentOrderCaptureTransaction;
}