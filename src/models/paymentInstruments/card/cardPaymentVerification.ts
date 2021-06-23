export interface CardPaymentVerification extends Identifiable {
    cardBrand: string;
    cardType: string;
    paymentToken: string;
    recurrenceToken: string;
    maskedPan: string;
    expiryDate: string;
    panToken: string;
    transaction: VerifyTransaction;
    isOperational: boolean;
    problem: Problem;
}