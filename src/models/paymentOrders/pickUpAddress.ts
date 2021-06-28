import { CountryCode } from "../countryCode";

export interface PickUpAddress {
    city: string;
    coAddress: string;
    countryCode: CountryCode;
    name: string;
    streetAddress: string;
    zipCode: string;
}