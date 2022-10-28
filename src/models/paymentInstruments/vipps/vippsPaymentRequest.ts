import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { VippsPaymentRequestDetails } from './vippsPaymentRequestDetails';

export class VippsPaymentRequest extends BaseModel{
    @v.ValidateNested()
    @Type(() => VippsPaymentRequestDetails)
    payment: VippsPaymentRequestDetails;
}