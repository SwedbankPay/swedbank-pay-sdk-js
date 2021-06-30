import { CardPaymentCardDetails } from "./card/cardPaymentCardDetails";

export interface PaymentAuthorization {
    acquirerStan: string;
    acquirerTerminalId: string;
    acquirerTransactionTime: string;
    acquirerTransactionType: string;
    authenticationStatus: string;
    cardBrand: string;
    cardType: string;
    countryCode: string;
    direct: boolean;
    expiryDate: string;
    externalNonPaymentToken: string;
    externalSiteId: string;
    issuerAuthorizationApprovalCode: string;
    issuingBank: string;
    maskedPan: string;
    nonPaymentToken: string;
    panToken: string;
    paymentToken: string;
    recurrenceToken: string;
    transaction: CardPaymentCardDetails;
    transactionInitiator: string;
    id: URL;
}