import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { PaymentInstrument } from '../payment-instrument';
import { CardPaymentAuthorizationListResponse } from './card-payment-authorization-list-response';

export class CardPayment extends PaymentInstrument {
    @v.ValidateNested()
    @Type(() => CardPaymentAuthorizationListResponse)
    authorizations: CardPaymentAuthorizationListResponse;

    @v.IsString()
    recurrenceToken: string;
}