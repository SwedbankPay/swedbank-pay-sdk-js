import * as v from 'class-validator';
import { Type } from 'class-transformer';
import { LegalAddress } from "../transactions/legalAddress";
import { Identifiable } from '../../generics/identifiable';

export class ApprovedLegalAddressResponse extends Identifiable{
    @v.ValidateNested()
    @Type(() => LegalAddress)
    approvedLegalAddress: LegalAddress;
}