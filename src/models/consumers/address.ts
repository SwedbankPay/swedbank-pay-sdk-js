import * as v from 'class-validator';
import { BaseModel } from '../generics/baseModel';

export class Address extends BaseModel {
    @v.IsString()
    addressee: string;
    
    @v.IsString()
    city: string;
    
    @v.IsString()
    coAddress: string;
    
    @v.IsString()
    @v.IsUppercase()
    @v.Length(2, 2)
    countryCode: string;
    
    @v.IsString()
    streetAddress: string;
    
    @v.IsString()
    zipCode: string;
}