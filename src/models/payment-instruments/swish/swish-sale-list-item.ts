import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { Transaction } from '../transactions/transaction';

export class SwishSaleListItem extends Identifiable {
  @v.IsString()
  date: string;

  @v.IsString()
  payerAlias: string;

  @v.IsString()
  paymentRequestToken: string;

  @v.IsString()
  swishPaymentReference: string;

  @v.IsString()
  swishStatus: string;

  @v.ValidateNested()
  @Type(() => Transaction)
  transaction: Transaction;
}
