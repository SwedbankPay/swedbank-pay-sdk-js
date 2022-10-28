import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/base-model';
import { MobilePayPaymentAuthorization } from './mobile-pay-payment-authorization';

export class MobilePayPaymentAuthorizationListResponse extends BaseModel{
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => MobilePayPaymentAuthorization)
    authorizationList: MobilePayPaymentAuthorization[];
}