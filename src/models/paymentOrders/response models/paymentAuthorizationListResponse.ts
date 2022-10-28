import { Identifiable } from '../../generics/identifiable';
import { PaymentAuthorization } from '../../paymentInstruments/paymentAuthorization';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class PaymentAuthorizationListResponse extends Identifiable{
    @v.ValidateNested()
    @Type(() =>PaymentAuthorization)
    authorizationList: PaymentAuthorization[];
}