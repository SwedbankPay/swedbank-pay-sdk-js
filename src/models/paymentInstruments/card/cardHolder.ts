import { Address } from "cluster";
import { AccountInfo } from "../../accountInfo";
import { EmailAddress } from "../../emailAddress";
import { Msisdn } from "../../msisdn";

export interface Cardholder {
    accountInfo: AccountInfo;
    billingAddress: Address;
    email: EmailAddress;
    firstName: string;
    lastName: string;
    homePhoneNumber: Msisdn;
    msisdn: Msisdn;
    shippingaddress: Address;
    workPhoneNumber: Msisdn;
}