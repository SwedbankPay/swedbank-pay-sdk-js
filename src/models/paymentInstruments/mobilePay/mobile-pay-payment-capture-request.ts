import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { CaptureTransaction } from '../transactions/captureTransaction';

export class MobilePayPaymentCaptureRequest extends BaseModel {
    @v.ValidateNested()
    @Type(() => CaptureTransaction)
    transaction: CaptureTransaction;
}