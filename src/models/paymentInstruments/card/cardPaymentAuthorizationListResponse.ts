import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { CardPaymentAuthorizationResponse } from './cardPaymentAuthorizationResponse';


export class CardPaymentAuthorizationListResponse extends Identifiable {
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => CardPaymentAuthorizationResponse)
    authorizationList: CardPaymentAuthorizationResponse[];
}