import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { CaptureTransaction } from '../transactions/capture-transaction';

export class VippsPaymentCaptureRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => CaptureTransaction)
    transaction: CaptureTransaction;
}