import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { CardPaymentVerifyRequestDetails } from './cardPaymentVerifyRequestDetails';

export class CardPaymentVerifyRequest {
    @v.ValidateNested()
    @Type(() => CardPaymentVerifyRequestDetails)
    payment: CardPaymentVerifyRequestDetails;
}