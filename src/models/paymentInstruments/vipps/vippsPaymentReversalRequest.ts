import { BaseModel } from "../../generics/baseModel";
import { VippsReversalTransaction } from "./vippsReversalTransaction";
import * as v from 'class-validator';
import { Type } from "class-transformer";

export class VippsPaymentReversalRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => VippsReversalTransaction)
    transaction: VippsReversalTransaction;
}