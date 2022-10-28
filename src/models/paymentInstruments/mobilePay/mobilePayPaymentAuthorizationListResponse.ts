import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../../generics/baseModel';
import { MobilePayPaymentAuthorization } from './mobilePayPaymentAuthorization';

export class MobilePayPaymentAuthorizationListResponse extends BaseModel{
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => MobilePayPaymentAuthorization)
    authorizationList: MobilePayPaymentAuthorization[];
}