import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { CardPaymentAuthorizationResponse } from './card-payment-authorization-response';

export class CardPaymentAuthorizationListResponse extends Identifiable {
  @v.IsArray()
  @v.ValidateNested()
  @Type(() => CardPaymentAuthorizationResponse)
  authorizationList: CardPaymentAuthorizationResponse[];
}
