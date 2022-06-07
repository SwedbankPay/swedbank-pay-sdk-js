import { ReversalRequestDetails } from "./reversalTransaction";
import * as v from 'class-validator'
import { Type } from "class-transformer";
import { BaseModel } from "../../generics/baseModel";

export class InvoicePaymentReversalRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => ReversalRequestDetails)
    transaction: ReversalRequestDetails;
}