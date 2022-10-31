import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { TrustlyReversalTransaction } from './trustly-reversal-transaction';

export class TrustlyPaymentReversalRequest extends BaseModel {
  @v.ValidateNested()
  @Type(() => TrustlyReversalTransaction)
  transaction: TrustlyReversalTransaction;
}
