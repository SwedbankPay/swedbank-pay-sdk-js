import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { VippsAuthorizationTransaction } from './vipps-authorization-transaction';

export class VippsPaymentAuthorizationRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => VippsAuthorizationTransaction)
    transaction: VippsAuthorizationTransaction;
}