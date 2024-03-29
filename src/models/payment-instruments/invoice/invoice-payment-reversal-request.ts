import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { ReversalRequestDetails } from './reversal-transaction';

export class InvoicePaymentReversalRequest extends BaseModel {
  @v.ValidateNested()
  @Type(() => ReversalRequestDetails)
  transaction: ReversalRequestDetails;
}
