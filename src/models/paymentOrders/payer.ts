import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { AccountInfo } from '../account-info';
import { Address } from '../address';
import { EmailAddress } from '../email-address';
import { BaseModel } from '../generics/base-model';
import { Msisdn } from '../msisdn';
import { NationalIdentifier } from './nationalIdentifier';

export class Payer extends BaseModel{
    @v.ValidateNested()
    @Type(() => AccountInfo)
    accountInfo: AccountInfo;

    @v.ValidateNested()
    @Type(() => Address)
    billingAddress: Address;

    @v.IsString()
    consumerProfileRef: string;

    @v.ValidateNested()
    @Type(() => EmailAddress)
    email: EmailAddress;

    @v.IsString()
    firstName: string;

    @v.IsString()
    homePhoneNumber: string;

    @v.IsString()
    lastName: string;

    @v.ValidateNested()
    @Type(() => Msisdn)
    msisdn: Msisdn;

    @v.ValidateNested()
    @Type(() => NationalIdentifier)
    nationalIdentifier: NationalIdentifier;

    @v.ValidateNested()
    @Type(() => Address)
    shippingAddress: Address;

    @v.IsString()
    workPhoneNumber: string;
}