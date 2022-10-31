import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Operation } from '../../enums/operation';
import { Amount } from '../../generics/amount';
import { BaseModel } from '../../generics/base-model';

export class TrustlyReversalTransaction extends BaseModel {
  @v.IsEnum(Operation)
  transactionActivity: Operation;

  @v.ValidateNested()
  @Type(() => Amount)
  amount: Amount;

  @v.IsString()
  description: string;

  @v.IsString()
  payeeReference: string;

  @v.IsString()
  recepitReference: string;

  @v.ValidateNested()
  @Type(() => Amount)
  vatAmount: Amount;
}
