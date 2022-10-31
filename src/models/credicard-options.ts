import * as v from 'class-validator';
import { BaseModel } from './generics/base-model';

export class CreditCardOptions extends BaseModel {
  @v.IsBoolean()
  mailOrderTelephoneOrder: boolean;

  @v.IsBoolean()
  rejectAuthenticationStatusA: boolean;

  @v.IsBoolean()
  rejectAuthenticationStatusU: boolean;

  @v.IsBoolean()
  rejectCardNot3DSecureEnrolled: boolean;

  @v.IsBoolean()
  rejectConsumerCards: boolean;

  @v.IsBoolean()
  rejectCorporateCards: boolean;

  @v.IsBoolean()
  rejectCreditCards: boolean;

  @v.IsBoolean()
  rejectDebitCards: boolean;
}
