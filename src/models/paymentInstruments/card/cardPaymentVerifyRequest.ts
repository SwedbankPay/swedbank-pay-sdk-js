import { CardPaymentVerifyRequestDetails } from './cardPaymentVerifyRequestDetails';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class CardPaymentVerifyRequest {
    @v.ValidateNested()
    @Type(() => CardPaymentVerifyRequestDetails)
    payment: CardPaymentVerifyRequestDetails;
}