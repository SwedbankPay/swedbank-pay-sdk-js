import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { Transaction } from './transaction';

export class TransactionListResponse extends Identifiable {
  @v.IsArray()
  @v.ValidateNested()
  @Type(() => Transaction)
  transactionList: Transaction[];
}
