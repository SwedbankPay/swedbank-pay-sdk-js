import { CountryCode } from "../countryCode";

export interface NationalIdentifier {
    countryCode: CountryCode;
    socialSecurityNumber: string;
}