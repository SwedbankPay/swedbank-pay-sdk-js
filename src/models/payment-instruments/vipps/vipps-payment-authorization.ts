import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { AuthorizationTransaction } from '../transactions/authorization-transaction';

export class VippsPaymentAuthorization extends Identifiable {
  @v.IsString()
  direct: boolean;

  @v.IsString()
  cardBrand: string;

  @v.IsString()
  cardType: string;

  @v.IsString()
  issuingBank: string;

  @v.IsString()
  maskedPan: string;

  @v.IsString()
  expiryDate: string;

  @v.IsString()
  panToken: string;

  @v.IsBoolean()
  panEnrolled: boolean;

  @v.IsString()
  acquirerTransactionTime: string;

  @v.ValidateNested()
  @Type(() => AuthorizationTransaction)
  transaction: AuthorizationTransaction;
}
