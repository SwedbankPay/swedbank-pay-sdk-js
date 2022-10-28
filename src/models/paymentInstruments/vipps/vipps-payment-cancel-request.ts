import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { CancelTransaction } from '../transactions/cancelTransaction';

export class VippsPaymentCancelRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => CancelTransaction)
    transaction: CancelTransaction;
}