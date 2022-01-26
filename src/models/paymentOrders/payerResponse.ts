import { Address } from "cluster";
import { AccountInfo } from "../accountInfo";
import { EmailAddress } from "../emailAddress";
import { Identifiable } from "../generics/identifiable";
import { Msisdn } from "../msisdn";
import { NationalIdentifier } from "./nationalIdentifier";

export interface PayerResponse extends Identifiable {
    accountInfo: AccountInfo;
    billingAddress: Address;
    consumerProfileRef: string;
    email: EmailAddress;
    firstName: string;
    homePhoneNumber: string;
    lastName: string;
    msisdn: Msisdn;
    nationalIdentifier: NationalIdentifier;
    shippingAddress: Address;
    workPhoneNumber: string;
}