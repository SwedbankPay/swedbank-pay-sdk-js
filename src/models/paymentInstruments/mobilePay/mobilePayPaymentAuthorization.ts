import { AuthorizationTransaction } from "../transactions/authorizationTransaction";
import * as v from 'class-validator';
import { Type } from 'class-transformer';

export class MobilePayPaymentAuthorization {
    @v.IsString()
    acquirerStan: string;
    
    @v.IsString()
    acquirerTerminalId: string;
    
    @v.IsString()
    acquirerTransactionTime: string;
    
    @v.IsString()
    acquirerTransactionType: string;
    
    @v.IsString()
    cardBrand: string;
    
    @v.IsString()
    cardType: string;
    
    @v.IsString()
    countryCode: string;
    
    @v.IsString()
    expiryDate: string;
    
    @v.IsString()
    maskedPan: string;
    
    @v.IsString()
    panToken: string;

    @v.ValidateNested()
    @Type(() => AuthorizationTransaction)
    transaction: AuthorizationTransaction;
}