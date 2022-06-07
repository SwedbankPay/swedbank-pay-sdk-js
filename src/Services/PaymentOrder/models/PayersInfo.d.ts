import { GenericResource } from "../../../models/generics/GenericResource";
import { Address } from "./Address";
import { NationalIdentifier } from "./NationalIdentifier";
import { AccountInfo } from "./AccountInfo";


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
