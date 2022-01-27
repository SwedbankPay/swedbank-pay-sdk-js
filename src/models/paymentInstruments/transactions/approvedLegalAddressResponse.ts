import { LegalAddress } from "../legalAddress";

export interface ApprovedLegalAddressResponse {
    payment: URL;
    approvedLegalAddress: LegalAddress;
}