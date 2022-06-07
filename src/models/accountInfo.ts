import * as v from 'class-validator';
import { BaseModel } from './generics/baseModel';
import { AccountAgeIndicator } from "./enums/accountAgeIndicator";
import { AccountChangeIndicator } from "./enums/accountChangeIndicator";
import { AccountPwdChangeIndicator } from "./enums/accountPwdChangeIndicator";
import { ShippingAddressUsageIndicator } from "./enums/shippingAddressUsageIndicator";
import { ShippingNameIndicator } from "./enums/shippingNameIndicator";
import { SuspiciousAccountActivity } from "./enums/suspiciousAccountActivity";

export class AccountInfo extends BaseModel {

    @v.IsEnum(AccountAgeIndicator)
    accountAgeIndicator: AccountAgeIndicator;
    
    @v.IsEnum(AccountChangeIndicator)
    accountChangeIndicator: AccountChangeIndicator;
    
    @v.IsEnum(AccountPwdChangeIndicator)
    accountPwdChangeIndicator: AccountPwdChangeIndicator;
    
    @v.IsBoolean()
    addressMatchIndicator: boolean;
    
    @v.IsEnum(ShippingAddressUsageIndicator)
    shippingAddressUsageIndicator: ShippingAddressUsageIndicator;
    
    @v.IsEnum(ShippingNameIndicator)
    shippingNameIndicator: ShippingNameIndicator;
    
    @v.IsEnum(SuspiciousAccountActivity)
    suspiciousAccountActivity: SuspiciousAccountActivity;
}