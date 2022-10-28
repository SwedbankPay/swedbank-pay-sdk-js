import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { PaymentAuthorization } from '../../paymentInstruments/paymentAuthorization';

export class PaymentAuthorizationListResponse extends Identifiable{
    @v.ValidateNested()
    @Type(() =>PaymentAuthorization)
    authorizationList: PaymentAuthorization[];
}