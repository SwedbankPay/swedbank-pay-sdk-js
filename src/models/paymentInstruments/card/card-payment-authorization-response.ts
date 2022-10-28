import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { CardPaymentAuthorization } from './card-payment-authorization';

export class CardPaymentAuthorizationResponse extends BaseModel {
    @v.ValidateNested()
    @Type(() => CardPaymentAuthorization)
    authorization: CardPaymentAuthorization;

    @v.IsUrl()
    payment: URL;
}