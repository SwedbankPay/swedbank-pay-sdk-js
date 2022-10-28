import { GenericResource } from '../../../models/generics/GenericResource';
import { AccountInfo } from './AccountInfo';
import { Address } from './Address';
import { NationalIdentifier } from './NationalIdentifier';


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
