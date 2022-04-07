import { OrderItem } from "../../../Services/PaymentOrder/models/OrderItem";
import { Amount } from "../../generics/amount";
import { BaseModel } from "../../generics/baseModel";
import * as v from 'class-validator';
import { Type } from "class-transformer";

export class PaymentOrderCaptureTransaction extends BaseModel{
    @v.ValidateNested()
    @Type(() => Amount)
    amount: Amount;

    @v.IsString()
    description: string;

    @v.IsArray()
    @v.ValidateNested()
    @Type(() => OrderItem)
    orderItems: OrderItem[];
    @v.IsString()
    payeeReference: string;
    @v.ValidateNested()
    @Type(() => Amount)
    vatAmount: Amount;
}