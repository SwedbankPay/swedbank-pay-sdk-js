import * as v from 'class-validator';
import { AccountAgeIndicator } from './enums/account-age-indicator';
import { AccountChangeIndicator } from './enums/account-change-indicator';
import { AccountPwdChangeIndicator } from './enums/account-pwd-change-indicator';
import { ShippingAddressUsageIndicator } from './enums/shipping-address-usage-indicator';
import { ShippingNameIndicator } from './enums/shipping-name-indicator';
import { SuspiciousAccountActivity } from './enums/suspicious-account-activity';
import { BaseModel } from './generics/base-model';

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