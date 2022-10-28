import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';

export class PaymentOrderCancelTransaction extends BaseModel {
  @v.IsString()
  description: string;

  @v.IsString()
  payeeReference: string;
}
