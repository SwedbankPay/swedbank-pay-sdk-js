import { BaseModel } from '../../generics/baseModel';
import { CaptureTransaction } from '../transactions/captureTransaction';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class VippsPaymentCaptureRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => CaptureTransaction)
    transaction: CaptureTransaction;
}