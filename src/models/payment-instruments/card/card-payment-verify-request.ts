import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { CardPaymentVerifyRequestDetails } from './card-payment-verify-request-details';

export class CardPaymentVerifyRequest {
  @v.ValidateNested()
  @Type(() => CardPaymentVerifyRequestDetails)
  payment: CardPaymentVerifyRequestDetails;
}
