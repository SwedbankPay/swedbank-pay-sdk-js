import { AccountAgeIndicator } from "./accountAgeIndicator";
import { AccountChangeIndicator } from "./accountChangeIndicator";
import { AccountPwdChangeIndicator } from "./accountPwdChangeIndicator";
import { ShippingAddressUsageIndicator } from "./shippingAddressUsageIndicator";
import { ShippingNameIndicator } from "./shippingNameIndicator";
import { SuspiciousAccountActivity } from "./suspiciousAccountActivity";

export interface AccountInfo {
    accountAgeIndicator: AccountAgeIndicator;
    accountChangeIndicator: AccountChangeIndicator;
    accountPwdChangeIndicator: AccountPwdChangeIndicator;
    addressMatchIndicator: boolean;
    shippingAddressUsageIndicator: ShippingAddressUsageIndicator;
    shippingNameIndicator: ShippingNameIndicator;
    suspiciousAccountActivity: SuspiciousAccountActivity;
}