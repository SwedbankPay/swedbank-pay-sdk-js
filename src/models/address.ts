import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { CountryCode } from './country-code';
import { EmailAddress } from './email-address';
import { BaseModel } from './generics/baseModel';
import { Msisdn } from './msisdn';

export class Address extends BaseModel{
    @v.IsString()
    city: string;
    
    @v.IsString()
    coAddress: string;
    
    @v.ValidateNested()
    @Type(() => CountryCode)
    countryCode: CountryCode;

    @v.ValidateNested()
    @Type(() => EmailAddress)
    email: EmailAddress;
    
    @v.IsString()
    firstName: string;
    
    @v.IsString()
    lastName: string;

    @v.ValidateNested()
    @Type(() => Msisdn)
    msisdn: Msisdn;
    
    @v.IsString()
    streetAddress: string;
    
    @v.IsString()
    zipCode: string;
}