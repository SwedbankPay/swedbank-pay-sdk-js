import { TrustlyPaymentDetails } from "./trustlyPaymentDetails";
import { BaseModel } from "../../generics/baseModel";
import * as v from 'class-validator';
import { Type } from "class-transformer";

export class TrustlyPaymentRequest extends BaseModel {
    @v.ValidateNested()
    @Type(() => TrustlyPaymentDetails)
    payment: TrustlyPaymentDetails;
}