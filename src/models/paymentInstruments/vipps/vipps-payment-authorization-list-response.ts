import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { VippsPaymentAuthorization } from './vippsPaymentAuthorization';

export class VippsPaymentAuthorizationListResponse extends Identifiable {
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => VippsPaymentAuthorization)
    authorizationList: VippsPaymentAuthorization[];
}