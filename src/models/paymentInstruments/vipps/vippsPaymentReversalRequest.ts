import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { VippsReversalTransaction } from './vippsReversalTransaction';

export class VippsPaymentReversalRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => VippsReversalTransaction)
    transaction: VippsReversalTransaction;
}