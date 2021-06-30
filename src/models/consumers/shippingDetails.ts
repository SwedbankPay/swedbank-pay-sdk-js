import { Address } from "cluster";
import { EmailAddress } from "../emailAddress";
import { Msisdn } from "../msisdn";

export interface ShippingDetails {
    email: EmailAddress;
    msisdn: Msisdn;
    shippingAddress: Address;
}