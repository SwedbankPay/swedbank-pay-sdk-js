import { VippsAuthorizationTransaction } from './vippsAuthorizationTransaction';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { Type } from 'class-transformer';

export class VippsPaymentAuthorizationRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => VippsAuthorizationTransaction)
    transaction: VippsAuthorizationTransaction;
}