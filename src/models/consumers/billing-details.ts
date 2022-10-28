import { Address } from 'cluster';
import { EmailAddress } from '../email-address';
import { Msisdn } from '../msisdn';

export interface BillingDetails {
    billingAddress: Address;
    email: EmailAddress;
    msisdn: Msisdn;
}