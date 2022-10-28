import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { CardPaymentAuthorization } from './cardPaymentAuthorization';

export class CardPaymentAuthorizationResponse extends BaseModel {
    @v.ValidateNested()
    @Type(() => CardPaymentAuthorization)
    authorization: CardPaymentAuthorization;

    @v.IsUrl()
    payment: URL;
}