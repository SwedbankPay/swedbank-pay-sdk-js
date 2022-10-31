import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { Transaction } from '../transactions/transaction';

export class SwishPaymentSale extends Identifiable {
  @v.IsString()
  created: string;

  @v.IsString()
  updated: string;

  @v.IsString()
  paymentRequestToken: string;

  @v.ValidateNested()
  @Type(() => Transaction)
  transaction: Transaction;
}
