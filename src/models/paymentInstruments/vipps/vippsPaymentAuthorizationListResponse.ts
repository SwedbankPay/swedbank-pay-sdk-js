import { Identifiable } from '../../generics/identifiable';
import { VippsPaymentAuthorization } from './vippsPaymentAuthorization';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class VippsPaymentAuthorizationListResponse extends Identifiable {
    @v.IsArray()
    @v.ValidateNested()
    @Type(() => VippsPaymentAuthorization)
    authorizationList: VippsPaymentAuthorization[];
}