import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { CancelTransaction } from '../transactions/cancel-transaction';

export class VippsPaymentCancelRequest extends BaseModel {
  @v.ValidateNested()
  @Type(() => CancelTransaction)
  transaction: CancelTransaction;
}
