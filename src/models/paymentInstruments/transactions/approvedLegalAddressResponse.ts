import * as v from 'class-validator';
import { Type } from 'class-transformer';
import { BaseModel } from '../../generics/baseModel';
import { LegalAddress } from "./legalAddress";

export class ApprovedLegalAddressResponse extends BaseModel{
    @v.IsUrl()
    payment: URL;

    @v.ValidateNested()
    @Type(() => LegalAddress)
    approvedLegalAddress: LegalAddress;
}