import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { Identifiable } from '../../generics/identifiable';
import { LegalAddress } from '../transactions/legalAddress';

export class ApprovedLegalAddressResponse extends Identifiable{
    @v.ValidateNested()
    @Type(() => LegalAddress)
    approvedLegalAddress: LegalAddress;
}