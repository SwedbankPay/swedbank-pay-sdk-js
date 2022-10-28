import { VippsPaymentRequestDetails } from './vippsPaymentRequestDetails';
import * as v from 'class-validator';
import { Type } from 'class-transformer';
import { BaseModel } from '../../generics/baseModel';

export class VippsPaymentRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => VippsPaymentRequestDetails)
    payment: VippsPaymentRequestDetails;
}