import { AccountAgeIndicator } from "./enums/accountAgeIndicator";
import { AccountChangeIndicator } from "./enums/accountChangeIndicator";
import { AccountPwdChangeIndicator } from "./enums/accountPwdChangeIndicator";
import { ShippingAddressUsageIndicator } from "./enums/shippingAddressUsageIndicator";
import { ShippingNameIndicator } from "./enums/shippingNameIndicator";
import { SuspiciousAccountActivity } from "./enums/suspiciousAccountActivity";

export interface AccountInfo {
    accountAgeIndicator: AccountAgeIndicator;
    accountChangeIndicator: AccountChangeIndicator;
    accountPwdChangeIndicator: AccountPwdChangeIndicator;
    addressMatchIndicator: boolean;
    shippingAddressUsageIndicator: ShippingAddressUsageIndicator;
    shippingNameIndicator: ShippingNameIndicator;
    suspiciousAccountActivity: SuspiciousAccountActivity;
}