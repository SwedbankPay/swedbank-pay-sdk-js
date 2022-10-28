import { PaymentInstrument } from '../paymentInstrument';
import { CardPaymentAuthorizationListResponse } from './cardPaymentAuthorizationListResponse';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class CardPayment extends PaymentInstrument {
    @v.ValidateNested()
    @Type(() => CardPaymentAuthorizationListResponse)
    authorizations: CardPaymentAuthorizationListResponse;

    @v.IsString()
    recurrenceToken: string;
}