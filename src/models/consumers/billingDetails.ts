import { Address } from 'cluster';
import { EmailAddress } from '../emailAddress';
import { Msisdn } from '../msisdn';

export interface BillingDetails {
    billingAddress: Address;
    email: EmailAddress;
    msisdn: Msisdn;
}