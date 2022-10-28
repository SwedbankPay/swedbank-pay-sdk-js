import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { AccountInfo } from '../../account-info';
import { Address } from '../../address';
import { EmailAddress } from '../../email-address';
import { BaseModel } from '../../generics/baseModel';
import { Msisdn } from '../../msisdn';

export class Cardholder extends BaseModel{

    @v.ValidateNested()
    @Type(() => AccountInfo)
    accountInfo: AccountInfo;
    
    @v.ValidateNested()
    @Type(() => Address)
    billingAddress: Address;
    
    @v.ValidateNested()
    @Type(() => EmailAddress)
    email: EmailAddress;
    
    @v.IsString()
    firstName: string;
    
    @v.IsString()
    lastName: string;
    
    @v.ValidateNested()
    @Type(() => Msisdn)
    homePhoneNumber: Msisdn;
    
    @v.ValidateNested()
    @Type(() => Msisdn)
    msisdn: Msisdn;
    
    @v.ValidateNested()
    @Type(() => Address)
    shippingaddress: Address;
    
    @v.ValidateNested()
    @Type(() => Msisdn)
    workPhoneNumber: Msisdn;
}