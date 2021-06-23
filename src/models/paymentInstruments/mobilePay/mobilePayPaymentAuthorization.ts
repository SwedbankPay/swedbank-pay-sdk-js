export interface MobilePayPaymentAuthorization {
    acquirerStan: string;
    acquirerTerminalId: string;
    acquirerTransactionTime: string;
    acquirerTransactionType: string;
    cardBrand: string;
    cardType: string;
    countryCode: string;
    expiryDate: string;
    maskedPan: string;
    panToken: string;
    transaction: AuthorizationTransaction;
}