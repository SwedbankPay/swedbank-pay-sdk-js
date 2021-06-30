import { CountryCode } from "./countryCode";
import { EmailAddress } from "./emailAddress";
import { Msisdn } from "./msisdn";

export interface Address {
    city: string;
    coAddress: string;
    countryCode: CountryCode;
    email: EmailAddress;
    firstName: string;
    lastName: string;
    msisdn: Msisdn;
    streetAddress: string;
    zipCode: string;
}