export interface Payer {
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