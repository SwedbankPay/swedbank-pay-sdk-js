import { Type } from 'class-transformer';
import * as v from 'class-validator';
import { BaseModel } from '../generics/baseModel';
import { CardPaymentCardDetails } from './card/cardPaymentCardDetails';

export class PaymentAuthorization extends BaseModel{
    @v.IsString()
    acquirerStan: string;

    @v.IsString()
    acquirerTerminalId: string;

    @v.IsString()
    acquirerTransactionTime: string;

    @v.IsString()
    acquirerTransactionType: string;

    @v.IsString()
    authenticationStatus: string;

    @v.IsString()
    cardBrand: string;

    @v.IsString()
    cardType: string;

    @v.IsString()
    countryCode: string;

    @v.IsBoolean()
    direct: boolean;

    @v.IsString()
    expiryDate: string;

    @v.IsString()
    externalNonPaymentToken: string;

    @v.IsString()

    @v.IsString()
    externalSiteId: string;

    @v.IsString()
    issuerAuthorizationApprovalCode: string;

    @v.IsString()
    issuingBank: string;

    @v.IsString()

    @v.IsString()
    maskedPan: string;

    @v.IsString()
    nonPaymentToken: string;

    @v.IsString()
    panToken: string;

    @v.IsString()
    paymentToken: string;

    @v.IsString()
    recurrenceToken: string;

    @v.ValidateNested()
    @Type(() => CardPaymentCardDetails)
    transaction: CardPaymentCardDetails;

    @v.IsString()
    transactionInitiator: string;

    @v.IsUrl()
    id: URL;
}