import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';

export class PaymentOrderAbortRequestDetails extends BaseModel {
  @v.IsString()
  abortReason: string;

  @v.IsString()
  operation: string;
}
