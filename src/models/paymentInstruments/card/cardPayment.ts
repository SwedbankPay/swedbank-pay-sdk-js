export interface CardPayment extends Identifiable, PaymentInstrument {
    authorizations: CardPaymentAuthorizationListResponse;
    recurrenceToken: string;
}