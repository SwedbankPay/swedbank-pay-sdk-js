import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { Problem } from '../../generics/problem';
import { VerifyTransaction } from './verify-transaction';

export class CardPaymentVerification extends Identifiable {
  @v.IsString()
  cardBrand: string;

  @v.IsString()
  cardType: string;

  @v.IsString()
  paymentToken: string;

  @v.IsString()
  recurrenceToken: string;

  @v.IsString()
  maskedPan: string;

  @v.IsString()
  expiryDate: string;

  @v.IsString()
  panToken: string;

  @v.ValidateNested()
  @Type(() => VerifyTransaction)
  transaction: VerifyTransaction;

  @v.IsBoolean()
  isOperational: boolean;

  @v.ValidateNested()
  @Type(() => Problem)
  problem: Problem;
}
