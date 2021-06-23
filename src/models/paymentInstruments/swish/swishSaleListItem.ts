export interface SwishSaleListItem extends Identifiable {
    date: string;
    payerAlias: string;
    paymentRequestToken: string;
    swishPaymentReference: string;
    swishStatus: string;
    transaction: Transaction;
}