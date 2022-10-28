import { CountryCode } from '../countryCode';
import { BaseModel } from '../generics/baseModel';
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class NationalIdentifier extends BaseModel{
    @v.ValidateNested()
    @Type(() => CountryCode)
    countryCode: CountryCode;

    @v.IsString()
    socialSecurityNumber: string;
}