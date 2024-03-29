import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Amount } from '../../generics/amount';
import { BaseModel } from '../../generics/base-model';

class TransactionModel extends BaseModel {
  @v.ValidateNested()
  @Type(() => Amount)
  amount: Amount;

  @v.ValidateNested()
  @Type(() => Amount)
  vatAmount: Amount;

  @v.IsString()
  description: string;

  @v.IsString()
  payeeReference: string;
}

export class ReversalTransaction extends BaseModel {
  @Type(() => TransactionModel)
  @v.ValidateNested()
  transaction: TransactionModel;
}
