import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Address } from '../address';
import { EmailAddress } from '../email-address';
import { BaseModel } from '../generics/base-model';
import { Msisdn } from '../msisdn';

export class ShippingDetails extends BaseModel {
  @v.ValidateNested()
  @Type(() => EmailAddress)
  email: EmailAddress;

  @v.ValidateNested()
  @Type(() => Msisdn)
  msisdn: Msisdn;

  @v.ValidateNested()
  @Type(() => Address)
  shippingAddress: Address;
}
