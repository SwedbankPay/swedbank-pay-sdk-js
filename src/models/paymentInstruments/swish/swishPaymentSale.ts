export interface SwishPaymentSale extends Identifiable {
    created: string;
    updated: string;
    paymentRequestToken: string;
    transaction: Transaction;
}