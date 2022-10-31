import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { CardPaymentVerification } from './card-payment-verification';

export class CardPaymentVerifications extends Identifiable {
  @v.IsArray()
  @v.ValidateNested()
  @Type(() => CardPaymentVerification)
  verificationList: CardPaymentVerification[];
}
