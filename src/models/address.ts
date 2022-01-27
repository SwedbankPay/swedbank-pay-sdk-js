import * as v from 'class-validator';
import { BaseModel } from './generics/baseModel';
import { CountryCode } from "./countryCode";
import { EmailAddress } from "./emailAddress";
import { Msisdn } from "./msisdn";
import { Type } from 'class-transformer';

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