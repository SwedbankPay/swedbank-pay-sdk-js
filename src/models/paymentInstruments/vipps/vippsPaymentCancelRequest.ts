import { BaseModel } from "../../generics/baseModel";
import * as v from 'class-validator';
import { Type } from "class-transformer";
import { CancelTransaction } from "../transactions/cancelTransaction";

export class VippsPaymentCancelRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => CancelTransaction)
    transaction: CancelTransaction;
}