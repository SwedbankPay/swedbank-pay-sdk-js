import * as v from 'class-validator';
import { Type } from 'class-transformer';
import { BaseModel } from '../../generics/baseModel';

export class ApprovedLegalAddressRequest extends BaseModel {
    @v.ValidateNested()
    @Type(() => LegalAddress)
    addressee: LegalAddress;
}

class LegalAddress extends BaseModel{
    @v.IsString()
    socialSecurityNumber: string;

    @v.IsString()
    zipCode: string;
}