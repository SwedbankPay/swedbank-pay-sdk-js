import { GenericResource } from '../../../models/generics/generic-resource';
import { AccountInfo } from './account-info';
import { Address } from './address';
import { NationalIdentifier } from './national-identifier';

export interface PayersInfo extends GenericResource {
  accountInfo: AccountInfo;
  billingAddress: Address;
  consumerProfileRef: string;
  email: string;
  firstName: string;
  homePhoneNumber: string;
  lastName: string;
  msisdn: string;
  nationalIdentifier: NationalIdentifier;
  shippingAddress: Address;
  workPhoneNumber: string;
}
