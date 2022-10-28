import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { VippsReversalTransaction } from './vipps-reversal-transaction';

export class VippsPaymentReversalRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => VippsReversalTransaction)
    transaction: VippsReversalTransaction;
}