import { CaptureTransaction } from "../transactions/captureTransaction";
import { BaseModel } from "../../generics/baseModel";
import * as v from 'class-validator';
import { Type } from "class-transformer";

export class MobilePayPaymentCaptureRequest extends BaseModel {
    @v.ValidateNested()
    @Type(() => CaptureTransaction)
    transaction: CaptureTransaction;
}