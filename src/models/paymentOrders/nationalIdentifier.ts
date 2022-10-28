import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { CountryCode } from '../country-code';
import { BaseModel } from '../generics/baseModel';

export class NationalIdentifier extends BaseModel{
    @v.ValidateNested()
    @Type(() => CountryCode)
    countryCode: CountryCode;

    @v.IsString()
    socialSecurityNumber: string;
}