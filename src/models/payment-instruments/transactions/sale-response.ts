import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { TransactionResponse } from './transaction-response';

export class SaleResponse extends BaseModel {
  @v.IsUrl()
  payment: URL;

  @v.ValidateNested()
  @Type(() => TransactionResponse)
  sale: TransactionResponse;
}
