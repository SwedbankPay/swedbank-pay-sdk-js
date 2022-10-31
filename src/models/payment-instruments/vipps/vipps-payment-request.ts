import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { VippsPaymentRequestDetails } from './vipps-payment-request-details';

export class VippsPaymentRequest extends BaseModel {
  @v.ValidateNested()
  @Type(() => VippsPaymentRequestDetails)
  payment: VippsPaymentRequestDetails;
}
